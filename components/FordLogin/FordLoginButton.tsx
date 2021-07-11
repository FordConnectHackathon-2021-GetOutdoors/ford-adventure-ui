import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import { getCode } from "endpoints";

export function FordLoginButton() {
  return (
    <chakra.a
      href={getCode}
      bg="transparent"
      p="5"
      pos="fixed"
      bottom="0"
      zIndex="4"
      w="100%"
    >
      <Box
        bg="bg.darknavy"
        color="white"
        fontFamily="FontAntenna"
        px="4"
        py="4"
        w="20rem"
        borderRadius="md"
      >
        Connect
      </Box>
    </chakra.a>
  );
}
