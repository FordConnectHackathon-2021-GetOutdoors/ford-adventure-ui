import { Title } from "components/Title";
import { SearchInput } from "components/SearchInput";
import { FormControl } from "components/FormControl";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import Fullscreen from "components/Fullscreen";
import CardRadio from "components/CardRadio";
import React from "react";
import { ThreeUpButtonGroup } from "components/ThreeUpButtonGroup";

export default function Adventures() {
  return (
    <Fullscreen>
      <Container>
        <Title faded>Ford Adventure</Title>
        <ThreeUpButtonGroup />
        <SearchInput />
        <Box pb={8}>
          <FormControl id="name" label="Your Name" />
          <FormControl
            id="email"
            label="Email Address"
            helperText="We'll never share your email."
          />
        </Box>
        <Flex justifyContent="center" w="100%">
          <Button variant="tile">Go</Button>
        </Flex>
        <Flex justifyContent="center" w="100%" py="10">
          <CardRadio />
        </Flex>
      </Container>
    </Fullscreen>
  );
}
