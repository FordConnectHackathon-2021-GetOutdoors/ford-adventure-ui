import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title faded>Dashboard</Title>
      <Button variant="tile">Buy</Button>
    </Fullscreen>
  );
}
