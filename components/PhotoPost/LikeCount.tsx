import React from "react";
import { ChakraProps, Text } from "@chakra-ui/react";

interface LikeCountProps extends ChakraProps {
  likeCount: number;
}

export function LikeCount({ likeCount, ...props }: LikeCountProps) {
  return (
    <Text
      fontFamily="FontAntennaCond"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="wide"
      fontSize="sm"
      mb="1"
      {...props}
    >
      {likeCount} Likes
    </Text>
  );
}
