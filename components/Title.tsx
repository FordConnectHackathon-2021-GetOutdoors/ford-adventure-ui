import { chakra } from "@chakra-ui/react";

export function Title({ ...props }) {
  return (
    <chakra.h1
      fontSize="5xl"
      opacity={props?.placeholder ? 0.1 : 1}
      {...props}
    />
  );
}
