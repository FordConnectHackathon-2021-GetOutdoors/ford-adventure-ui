import { Title } from "components/Title";

import React from "react";
import { SearchInput } from "components/SearchInput";
import { Container } from "@chakra-ui/react";
import Fullscreen from "components/Fullscreen";

export default function Adventures() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Container>
        <Title faded>Adventures</Title>
        <SearchInput />
      </Container>
    </Fullscreen>
  );
}
