import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import SignUp from "../SignUp/SignUp";

export default function Landing() {
  return (
    <Box
      p="4"
      w="100%"
      h="100%"
    >
      <SignUp />
    </Box>
  );
}
