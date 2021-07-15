import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./Logo/Logo";

export const Loading = () => (
  <Flex
    fontSize="3xl"
    h="var(--100vh)"
    w="100%"
    justifyContent="center"
    align="center"
    flexDir="column"
  >
    <Logo w={["90vw", "60vh"]} h={["90vw", "60vh"]} mt="-40" />
    <Box>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="text.darknavy"
        size="xl"
      />
    </Box>
  </Flex>
);
