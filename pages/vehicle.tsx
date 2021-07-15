import { parseCookies } from "nookies";
import { Box, Button, Flex, GridItem } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { getVehicleStatus, postVehicleStatus } from "utils/endpoints";
import { Loading } from "components/Loading";
import { Header } from "components/Header/Header";
import { MotionGrid } from "components/motion";
import { addDomEvent } from "@chakra-ui/utils";
import mockVehicleData from "utils/mockVehicleData";
import { supabase } from "utils/supabase";
import {
  EVIcon,
  BatteryIcon,
  CheckboxIcon,
  GasIcon,
  OdometerIcon,
  OilIcon,
  TireIcon,
} from "../components/Icons";
import { error } from "console";
import { item } from "utils/animations";
import { VehicleStatus } from "../components/VehicleStatus/src/VehicleStatus";
import { data } from "msw/lib/types/context";

export const getServerSideProps = async (context: any) => {
  if (!context?.query?.adventure) return { props: {} };

  const { data, error }: any = await supabase
    .from("adventures")
    .select()
    .eq("slug", context?.query?.adventure);

  return {
    props: {
      adventure: { ...(await data[0]) },
      error,
    },
  };
};

export const VehicleStatusItem = ({
  children,
  displayName,
  id,
  percent,
  result,
  ...props
}: any) => {
  const icons = {
    battery: <BatteryIcon boxSize={6} />,
    checkbox: <CheckboxIcon boxSize={10} />,
    ev: <EVIcon boxSize={7} ml="1" />,
    gas: <GasIcon boxSize={6} ml="1" />,
    odometer: <OdometerIcon boxSize={6} />,
    oil: <OilIcon boxSize={7} />,
    tire: <TireIcon boxSize={6} ml={2} />,
  };
  return (
    <MotionGrid
      variants={item}
      templateColumns="repeat(4,1fr)"
      gap="5"
      h={children ? "auto" : percent ? "4rem" : "3rem"}
      pos="relative"
      pb={children ? 0 : percent ? 4 : 0}
      pt="5"
      {...props}
    >
      <GridItem colSpan={2} d="flex" alignItems="center">
        {icons[id]}
        <Box
          fontFamily="FontAntennaCond"
          fontWeight="600"
          letterSpacing="wider"
          fontSize="sm"
          pl="2"
          textTransform="uppercase"
          lineHeight={1}
        >
          {displayName}
        </Box>
      </GridItem>
      {result && (
        <GridItem
          colSpan={2}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            fontFamily="FontAntennaCond"
            fontSize="2xl"
            fontWeight="300"
            lineHeight={1}
            pr="2"
          >
            {result}
          </Box>
          <CheckboxIcon />
        </GridItem>
      )}
      {percent ? (
        <GridItem colSpan={4} position="absolute" bottom="-2" w="100%">
          <Box bg="gray.300" borderRadius="full" h="2">
            <Box
              bg="bg.darknavy"
              borderRadius="xl"
              w={`${percent ? percent : 0}%`}
              h={2}
            />
          </Box>
        </GridItem>
      ) : null}
      {children}
    </MotionGrid>
  );
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

export function useVehicleData() {
  const { fordToken, vehicleId } = parseCookies();
  return useSWR("vehicleStatus", () => fetchVehicleData(fordToken, vehicleId), {
    refreshInterval: 60000,
  });
}

export default function Vehicle({ adventure }: any) {
  const { data } = useVehicleData();
  // console.log("🚀 ~ file: vehicle.tsx ~ line 86 ~ Vehicle ~ data", data);
  // const data = mockVehicleData;

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
      <VehicleStatus
        adventure={adventure}
        data={data}
        headerHeight={headerHeight}
        setHeight={setHeight}
      />
    </Flex>
  );
}
