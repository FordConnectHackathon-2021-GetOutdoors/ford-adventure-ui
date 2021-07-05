import React from "react";
import { ChakraProps, Text } from "@chakra-ui/react";

interface LikeCountProps extends ChakraProps {
  likeCount: number;
}

export function LikeCount({ likeCount, ...props }: LikeCountProps) {
  return (
    <Text
      fontFamily="FontAntenna"
      fontWeight="600"
      textTransform="uppercase"
      // letterSpacing="wide"
      fontSize="sm"
      color="text.darknavy"
      // mt=".5"
      alignSelf="center"
      // lineHeight="1.5"
      ml="2"
      {...props}
      // mt="1"
    >
      {likeCount}
    </Text>
  );
}
