import { Flex, Box, Spacer } from "@chakra-ui/react";
import SignUp from "../SignUp/SignUp";

export default function Landing() {
  return (
    <Flex direction="row">
      <Spacer />
      <Box p="4">
        <SignUp />
      </Box>
      <Spacer />
    </Flex>
  );
}
