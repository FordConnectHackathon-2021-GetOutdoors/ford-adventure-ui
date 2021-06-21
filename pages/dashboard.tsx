import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";
import { Box, Button, Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Box pb="10">
        <Title faded>Dashboard</Title>
      </Box>
      <Flex justifyContent="center" w="100%">
        <Button variant="tile">Buy</Button>
      </Flex>
    </Fullscreen>
  );
}
