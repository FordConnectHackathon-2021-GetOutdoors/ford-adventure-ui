import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

interface TitleProps extends HeadingProps {
  faded: boolean;
}

export function Title({ faded, ...props }: Partial<TitleProps>) {
  return <Heading variant="H1" opacity={faded ? 0.2 : 1} {...props} />;
}
