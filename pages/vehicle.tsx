import { parseCookies } from "nookies";
import { Box, chakra, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { getVehicleStatus, postVehicleStatus } from "utils/endpoints";
import { Loading } from "components/Loading";
import { Header } from "components/Header/Header";
import { MotionBox } from "components/motion";
import { motion } from "framer-motion";
import { addDomEvent } from "@chakra-ui/utils";

import { supabase } from "utils/supabase";

export const getServerSideProps = async (context: any) => {
  if (!context?.query?.adventure) {
    return { props: { server: true } };
  }

  const { data, error } = await supabase
    .from("adventures")
    .select()
    .eq("id", 1);

  const adventureId = context?.query?.adventure;

  return { props: { adventure: { displayName: adventureId }, server: true } };
};

// wrap a generic fetcher into a single use request
async function fetchVehicleData(fordToken, vehicleId) {
  try {
    // 1. Send post, with auth token
    const ready = await fetcher(postVehicleStatus(vehicleId), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-version": "2020-06-01",
        "callback-url": "https://localhost:3000/",
        "Application-Id": process.env.NEXT_PUBLIC_FORD_APPLICATION_ID,
        Authorization: `Bearer ${fordToken}`,
      },
    });

    // 2. send get for vehicle info
    const vehicleData = await fetcher(getVehicleStatus(vehicleId), {
      headers: {
        "api-version": "2020-06-01",
        "Application-Id": process.env.NEXT_PUBLIC_FORD_APPLICATION_ID,
        Authorization: `Bearer ${fordToken}`,
      },
    });

    return vehicleData;
  } catch (error) {
    console.error(error);
  }
}

function useVehicleData() {
  const { fordToken, vehicleId } = parseCookies();
  return useSWR("vehicleStatus", () => fetchVehicleData(fordToken, vehicleId), {
    refreshInterval: 60000,
  });
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export default function Vehicle({ destination }: any) {
  const { data } = useVehicleData();

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeight] = useState(headerRef?.current?.clientHeight);
  useEffect(
    () =>
      addDomEvent(window, "resize", () =>
        setHeight(headerRef?.current?.clientHeight)
      ),
    []
  );
  useEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef?.current?.clientHeight);
    }
  }, [headerRef]);

  if (data?.status !== "SUCCESS") {
    return <Loading />;
  }

  return (
    <Flex flexDir="column">
      <Flex flexShrink={1} flexDir="column" ref={headerRef}>
        <Header />
      </Flex>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        style={{
          height: `calc(var(--100vh) - ${headerHeight || 0}px)`,
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          px="5"
          as={Heading}
          fontFamily="FontAntennaCond"
          fontWeight="200"
          fontSize="2rem"
          lineHeight="1"
        >
          you’re all set!
        </MotionBox>
        {destination?.displayName && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            px="5"
            as={Heading}
            fontFamily="FontAntennaCond"
            fontWeight="200"
            fontSize="2rem"
            lineHeight="1"
          >
            WE’VE CHECKED YOUR VEHICLE AND IT’S SAFE TO DRIVE TO
            {destination.displayName}
          </MotionBox>
        )}

        {Object.keys(data?.vehicle).map((key, idx) => {
          return (
            <MotionBox
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.04 } }}
              px="5"
              as={Heading}
              fontFamily="FontAntennaCond"
              fontWeight="200"
              fontSize="2rem"
            >
              {JSON.stringify(data?.vehicle[key])}
            </MotionBox>
          );
        })}
      </motion.ul>
    </Flex>
  );
}
