import React from "react";
import { Box, chakra } from "@chakra-ui/react";

export function FordLoginButton() {
  return (
    <chakra.a
      href="https://fordconnect.cv.ford.com/common/login/?make=F&application_id=afdc085b-377a-4351-b23e-5e1d35fb3700&client_id=30990062-9618-40e1-a27b-7c6bcb23658a&response_type=code&state=123&redirect_uri=https%3A%2F%2Flocalhost%3A3000&scope=access"
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
