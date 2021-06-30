import Fullscreen from "components/Fullscreen";
import { Carousel, items } from "../../components/Carousel/Carousel";

const defaultFilters = [
  {
    id: "123",
    displayName: "Desert",
  },

  {
    id: "576",
    displayName: "Beach",
  },
  {
    id: "453",
    displayName: "Country",
  },
];

export default function Adventures() {
  return (
    <Fullscreen>
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
