import { Flex, Box, Spacer, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SignUp from "../SignUp/SignUp";

export default function Landing() {
  return (
    <Grid
      // @ts-ignore
      templateColumns={["repeat(1)", , "repeat(2, 1fr)"]}
      gap={6}
      w="100%"
      h="var(--100vh)"
    >
      <Box>
        <Spacer />
        <Box
          p="4"
          w="clamp(200px, 32vw, 400px)"
          m="auto"
          top="50%"
          position="relative"
          transform="translateY(-50%)"
        >
          <SignUp />
        </Box>
        <Spacer />
      </Box>
      <Flex bg="bg.dark" color="white" p="20">
        <Heading variant="h1">Welcome</Heading>
      </Flex>
    </Grid>
  );
}
