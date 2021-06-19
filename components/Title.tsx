import { Heading } from "@chakra-ui/react";
import React from "react";

export function Title({ ...props }) {
  return (
    <Heading variant="H1" opacity={props?.placeholder ? 0.2 : 1} {...props} />
  );
}
