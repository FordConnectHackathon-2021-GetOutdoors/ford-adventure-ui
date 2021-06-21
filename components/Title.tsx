import { Text, HeadingProps, Heading, Box } from "@chakra-ui/react";
import React from "react";

interface TitleProps extends HeadingProps {
  faded: boolean;
}

export function Title({ faded, ...props }: Partial<TitleProps>) {
  return (
    <Box
      textStyle="h1"
      textAlign="center"
      opacity={faded ? 0.2 : 1}
      {...props}
    />
  );
}
