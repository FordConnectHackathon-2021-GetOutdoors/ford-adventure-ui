import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./Logo/Logo";
import { MotionBox } from "./motion";

export const Loading = () => (
  <MotionBox
    as={Flex}
    fontSize="3xl"
    h="var(--100vh)"
    w="100%"
    justifyContent="center"
    align="center"
    flexDir="column"
    initial={{ opacity: 0, y: 30 }}
    animate={{
      opacity: 1,
      type: "spring",
      y: "0%",
      transition: {
        // delay: 2.5,
        ease: [0.23, 1, 0.32, 1],
        duration: 1.5,
      },
    }}
  >
    <Logo w={["90vw", "60vh"]} h={["90vw", "60vh"]} mt="-40" />
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        type: "spring",
        y: "0%",
        transition: {
          // delay: 2.5,
          ease: [0.23, 1, 0.32, 1],
          duration: 2,
        },
      }}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="text.darknavy"
        size="xl"
      />
    </MotionBox>
  </MotionBox>
);
