import { Title } from "components/Title";
import { Container } from "@chakra-ui/react";
import Fullscreen from "components/Fullscreen";
import React from "react";
import SwipeAdventures from "components/SwipeAdventures/SwipeAdventures";

export default function Adventures() {
  return (
    <Fullscreen>
      <Container>
        <Title faded>Choose your Ford Adventure</Title>
        <SwipeAdventures />
      </Container>
    </Fullscreen>
  );
}
