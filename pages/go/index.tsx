import { Header } from "components/Carousel/Header";
import Fullscreen from "components/Fullscreen";
import React from "react";
import {
  Carousel,
  defaultFilters,
  items,
} from "../../components/Carousel/Carousel";

export default function Adventures() {
  return (
    <Fullscreen>
      <Header variant="overlay" />
      {defaultFilters && <Carousel items={items} filters={defaultFilters} />}
    </Fullscreen>
  );
}

{
  /* <Container>
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
      </Container> */
}
