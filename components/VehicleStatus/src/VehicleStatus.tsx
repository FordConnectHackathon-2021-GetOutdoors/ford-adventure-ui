import { Box, Flex, Icon, Stack, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { MotionBox } from "components/motion";
import { motion } from "framer-motion";
import { ContinueButton } from "../../ContinueButton";
import { TireCarIcon } from "../../Icons";
import { item, animatedList } from "utils/animations";
import { VehicleStatusItem } from "../../../pages/vehicle";

export const VehicleStatus = ({
  adventure,
  data,
  headerHeight,
  setHeight,
  ...props
}) => {
  console.log("🚀 ~ file: VehicleStatus.tsx ~ line 17 ~ adventure", adventure);
  const { odometer, fuelLevel, batteryChargeLevel } =
    data?.vehicle?.vehicleDetails;

  if (!data) {
    return null;
  }

  return (
    <Stack
      as={motion.ul}
      initial="hidden"
      animate="visible"
      variants={animatedList}
      style={{
        height: `calc(var(--100vh) - ${headerHeight || 0}px)`,
        overflowY: "scroll",
        position: "relative",
      }}
      mx="auto"
      pt={adventure ? 5 : 0}
      {...props}
    >
      {adventure && (
        <>
          <Heading
            px="8"
            as={motion.li}
            variants={item}
            fontFamily="FontAntennaCond"
            fontWeight="300"
            fontSize="4xl"
            lineHeight="1"
            color="text.darknavy"
          >
            you’re all set!
          </Heading>

          <MotionBox
            px={8}
            py={2}
            variants={item}
            fontFamily="FontAntennaCond"
            fontWeight="300"
            fontSize="sm"
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: 1,
              type: "spring",
              y: "0%",
              transition: {
                // delay: 2.5,
                ease: [0.23, 1, 0.32, 1],
                duration: 1,
              },
            }}
          >
            WE’VE CHECKED YOUR VEHICLE AND IT’S SAFE TO DRIVE TO
            <Box as="span" pl="1" fontWeight="600">
              {adventure.displayName}
            </Box>
          </MotionBox>
        </>
      )}

      <MotionBox
        d="flex"
        variants={item}
        bg="text.darknavy"
        color="white"
        pl={8}
        alignItems="center"
        initial={{ opacity: 0, y: "100%" }}
        animate={{
          opacity: 1,
          type: "spring",
          y: "0%",
          transition: {
            delay: 1,
            ease: [0.23, 1, 0.32, 1],
            duration: 0.6,
          },
        }}
      >
        <MotionBox
          fontSize="sm"
          lineHeight="1"
          fontWeight="400"
          py={4}
          fontFamily="FontAntenna"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            type: "spring",
            y: "0%",
            transition: {
              delay: 1.2,
              ease: [0.23, 1, 0.32, 1],
              duration: 0.6,
            },
          }}
        >
          Vehicle status as of
          <Box as="span"> July 9, 2021 at 11:28 am</Box>
        </MotionBox>
        <MotionBox
          as={Flex}
          alignItems="center"
          fontWeight="400"
          textTransform="none"
          pr="8"
          pl={4}
          borderRadius="0"
          alignSelf="stretch"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.2,
              ease: [0.23, 1, 0.32, 1],
              duration: 0.6,
            },
          }}
        >
          <Icon mr="2" viewBox="0 0 18 18">
            <path
              fill="#fff"
              d="M17.5 9c0-.27614-.2239-.5-.5-.5s-.5.22386-.5.5h1zm-.8072-2.50086c.2757.01622.5123-.19411.5285-.46977l.2643-4.49224c.0162-.27566-.1941-.51228-.4698-.5285-.2756-.016217-.5122.19411-.5285.46977l-.2349 3.9931-3.9931-.23493c-.2757-.01622-.5123.19411-.5285.46977-.0162.27567.1941.51229.4698.52851l4.4922.26429zM16.5 9c0 4.1421-3.3579 7.5-7.5 7.5v1c4.6944 0 8.5-3.8056 8.5-8.5h-1zM9 16.5c-4.14214 0-7.5-3.3579-7.5-7.5h-1c0 4.6944 3.80558 8.5 8.5 8.5v-1zM1.5 9c0-4.14214 3.35786-7.5 7.5-7.5v-1C4.30558.5.5 4.30558.5 9h1zM9 1.5c3.4557 0 5.07 2.26888 7.3485 4.83218l.7474-.66436C14.93 3.23112 12.9996.5 9 .5v1z"
            />
          </Icon>
          Refresh
        </MotionBox>
      </MotionBox>
      <Stack
        px={8}
        divider={<Box borderBottom="2px solid grey.300" />}
        variants={animatedList}
        initial="hidden"
        animate="visible"
        as={motion.ul}
        bg="white"
        pos="relative"
      >
        <VehicleStatusItem
          key="odometer"
          id="odometer"
          displayName="Odometer"
          result={`${Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 3,
          }).format(odometer)} mi`}
        />

        <VehicleStatusItem
          key="gas"
          id="gas"
          displayName="Fuel Level"
          percent={"0%"}
          result={
            <>
              {`${fuelLevel.distanceToEmpty}`} mi
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
          pt="5"
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

      <ContinueButton href={`/`} pt={adventure ? 40 : 10} zIndex="4" outline>
        Go To Dashboard
      </ContinueButton>
      {adventure?.slug && (
        <MotionBox
          pos="fixed"
          pb={100}
          w="100%"
          bottom="20"
          pointerEvents="none"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, duration: 0.5 },
          }}
        >
          <ContinueButton
            adventure={adventure}
            pointerEvents="auto"
            href={`/confirm?adventure=${adventure.slug}`}
            py="0"
            bottom="0"
            pos="absolute"
            zIndex="10"
          >
            Let&apos;s Go!
          </ContinueButton>
        </MotionBox>
      )}
    </Stack>
  );
};
