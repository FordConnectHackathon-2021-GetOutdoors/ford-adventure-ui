import { parseCookies } from "nookies";
import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { getVehicleStatus, postVehicleStatus } from "utils/endpoints";
import { Loading } from "components/Loading";
import { Header } from "components/Header/Header";
import { MotionBox } from "components/motion";
import { motion } from "framer-motion";
import { addDomEvent } from "@chakra-ui/utils";
import mockVehicleData from "utils/mockVehicleData";
import { supabase } from "utils/supabase";
import { ContinueButton } from "../components/ContinueButton";
import {
  EVIcon,
  BatteryIcon,
  CheckboxIcon,
  GasIcon,
  OdometerIcon,
  OilIcon,
  TireIcon,
  TireCarIcon,
} from "../components/Icons";

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
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      as={Grid}
      // @ts-ignore
      templateColumns="repeat(4,1fr)"
      gap="5"
      h={children ? "auto" : percent ? "4rem" : "3.5rem"}
      pos="relative"
      pb={children ? 0 : percent ? 4 : 0}
      {...props}
    >
      <GridItem colSpan={2} d="flex" alignItems="center">
        {icons[id]}
        <Text
          fontFamily="FontAntennaCond"
          fontWeight="600"
          letterSpacing="wider"
          fontSize="sm"
          pl="2"
          textTransform="uppercase"
          lineHeight={1}
        >
          {displayName}
        </Text>
      </GridItem>
      {result && (
        <GridItem
          colSpan={2}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            fontFamily="FontAntennaCond"
            fontSize="2xl"
            fontWeight="300"
            lineHeight={1}
            pr="2"
          >
            {result}
          </Text>
          <CheckboxIcon />
        </GridItem>
      )}
      {percent ? (
        <GridItem colSpan={4} position="absolute" bottom="1" w="100%">
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
    </MotionBox>
  );
};

export const getServerSideProps = async (context: any) => {
  if (!context?.query?.adventure) {
    return { props: { server: true } };
  }

  const { data, error }: any = await supabase
    .from("adventures")
    .select()
    .eq("id", 1);

  // const adventureId = context?.query?.adventure;
  const remoteData = await data[0];

  return {
    props: {
      adventure: remoteData,
      server: true,
    },
  };
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
      staggerChildren: 2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 4,
    },
  },
};

export default function Vehicle({ adventure }: any) {
  console.log(
    "🚀 ~ file: vehicle.tsx ~ line 100 ~ Vehicle ~ adventure",
    adventure
  );
  // const { data } = useVehicleData();
  // console.log("🚀 ~ file: vehicle.tsx ~ line 86 ~ Vehicle ~ data", data);
  const data = mockVehicleData;

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

      <Stack
        as={motion.ul}
        initial="hidden"
        animate="visible"
        variants={list}
        style={{
          height: `calc(var(--100vh) - ${headerHeight || 0}px)`,
          overflowY: "scroll",
          position: "relative",
        }}
        mx="auto"
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          px="8"
          as={Heading}
          fontFamily="FontAntennaCond"
          fontWeight="300"
          fontSize="4xl"
          lineHeight="1"
          color="text.darknavy"
        >
          you’re all set!
        </MotionBox>
        {adventure?.displayName && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            px={8}
            py={2}
            as={Heading}
            fontFamily="FontAntennaCond"
            fontWeight="300"
            fontSize="sm"
            // lineHeight="1"
          >
            WE’VE CHECKED YOUR VEHICLE AND IT’S SAFE TO DRIVE TO
            <Box as="span" pl="1" fontWeight="600">
              {adventure.displayName}
            </Box>
          </MotionBox>
        )}

        <MotionBox
          as={HStack}
          bg="text.darknavy"
          color="white"
          pl={8}
          alignItems="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Box
            fontSize="sm"
            lineHeight="1"
            fontWeight="400"
            py={4}
            fontFamily="FontAntenna"
          >
            Vehicle status as of
            <Box as="span"> July 9, 2021 at 11:28 am</Box>
          </Box>
          <Button
            as={Flex}
            // flexBasis="60%"
            alignItems="center"
            justify="flex-end"
            fontWeight="400"
            textTransform="none"
            pr="8"
            pl={4}
            borderRadius="0"
            alignSelf="stretch"
          >
            <Icon mr="2" viewBox="0 0 18 18">
              <path
                fill="#fff"
                d="M17.5 9c0-.27614-.2239-.5-.5-.5s-.5.22386-.5.5h1zm-.8072-2.50086c.2757.01622.5123-.19411.5285-.46977l.2643-4.49224c.0162-.27566-.1941-.51228-.4698-.5285-.2756-.016217-.5122.19411-.5285.46977l-.2349 3.9931-3.9931-.23493c-.2757-.01622-.5123.19411-.5285.46977-.0162.27567.1941.51229.4698.52851l4.4922.26429zM16.5 9c0 4.1421-3.3579 7.5-7.5 7.5v1c4.6944 0 8.5-3.8056 8.5-8.5h-1zM9 16.5c-4.14214 0-7.5-3.3579-7.5-7.5h-1c0 4.6944 3.80558 8.5 8.5 8.5v-1zM1.5 9c0-4.14214 3.35786-7.5 7.5-7.5v-1C4.30558.5.5 4.30558.5 9h1zM9 1.5c3.4557 0 5.07 2.26888 7.3485 4.83218l.7474-.66436C14.93 3.23112 12.9996.5 9 .5v1z"
              />
            </Icon>
            Refresh
          </Button>
        </MotionBox>
        {/* 
        {Object.keys(data?.vehicle).map((key, idx) => {
          return (
            <MotionBox
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.04 } }}
              px="5"
              fontFamily="FontAntenna"
              // fontWeight="200"
            >
              {JSON.stringify(data?.vehicle[key])}
            </MotionBox>
          );
        })} */}
        <Stack
          px={8}
          divider={<Box borderBottom="2px solid grey.300" />}
          variants={list}
          initial="hidden"
          animate="visible"
        >
          <VehicleStatusItem
            key="odometer"
            id="odometer"
            displayName="Odometer"
            result="124,123 mi"
          />

          <VehicleStatusItem
            key="gas"
            id="gas"
            displayName="Fuel Level"
            percent={24}
            result={
              <>
                147 mi
                <Box fontFamily="FontAntenna" fontSize="xs" fontWeight="500">
                  to empty
                </Box>
              </>
            }
          />

          <VehicleStatusItem
            key="battery"
            id="battery"
            displayName="Battery"
            percent={14}
            result={
              <>
                14%
                <Box fontFamily="FontAntenna" fontSize="xs" fontWeight="500">
                  to empty
                </Box>
              </>
            }
          />

          <VehicleStatusItem
            key="oil"
            id="oil"
            displayName="Oil Life"
            percent={57}
            result={
              <>
                57%
                <Box fontFamily="FontAntenna" fontSize="xs" fontWeight="500">
                  remaining
                </Box>
              </>
            }
          />

          <VehicleStatusItem
            key="ev"
            id="ev"
            displayName="EV Charge"
            percent={27}
            result={
              <>
                27%
                <Box fontFamily="FontAntenna" fontSize="xs" fontWeight="500">
                  charge level
                </Box>
              </>
            }
          ></VehicleStatusItem>
          <VehicleStatusItem
            key="tire"
            id="tire"
            displayName="Tire Pressure"
            pt="2"
          >
            <GridItem colSpan={4} fontSize="xs">
              <Flex pos="relative" h="28" maxW="200" pt="3" justify="start">
                <Flex
                  flexBasis="55%"
                  flexDir="column"
                  justifyContent="stretch"
                  alignItems="stretch"
                  h="100%"
                  // mx="auto"
                  pos="relative"
                  w="auto"
                >
                  <Box h="12">100%</Box>
                  <Box>100%</Box>
                </Flex>
                <Flex flexDir="column" justifyContent="stretch">
                  <Box h="12">100%</Box>
                  <Box>10%</Box>
                </Flex>
                <Box pos="absolute" h="24" top="0">
                  <TireCarIcon boxSize="24" ml="22%" />
                </Box>
              </Flex>
              <Box maxW="200" w="100%">
                Warning: do not use as a tire pressure gauge
              </Box>
            </GridItem>
          </VehicleStatusItem>
        </Stack>

        {adventure?.slug && (
          <MotionBox
            pos="fixed"
            pb={100}
            w="100%"
            bottom="20"
            pointerEvents="none"
          >
            <ContinueButton
              adventure={adventure}
              href={`/confirm?adventure=${adventure.slug}`}
              py="0"
              bottom="0"
              pos="absolute"
            >
              Let&apos;s Go!
            </ContinueButton>
          </MotionBox>
        )}
        <ContinueButton href={`/dashboard`} pt={40}>
          Go To Dashboard
        </ContinueButton>
      </Stack>
    </Flex>
  );
}
