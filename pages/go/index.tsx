import { Button, HStack } from "@chakra-ui/react";
import CardRadio from "components/CardRadio";
import { Carousel } from "components/Carousel/Carousel";
import { Header } from "components/Header/Header";
import React from "react";

export default function Adventures() {
  return (
    <>
      <Header variant="overlay" />
      <HStack
        overflowX="scroll"
        px={10}
        position="relative"
        zIndex="2"
        css={{
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Button variant="pill">Beach</Button>
        <Button variant="pill">Beach</Button>
        <Button variant="pill">Beach</Button>
        <Button variant="pill">Beach</Button>
        <Button variant="pill">Beach</Button>
        <Button variant="pill">Beach</Button>
      </HStack>
      <Carousel />
    </>
  );
}
