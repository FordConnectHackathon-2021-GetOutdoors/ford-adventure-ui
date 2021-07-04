import React from "react";
import Image from "next/image";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  HStack,
  Text,
  VStack,
  ChakraProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { LikeCount } from "./LikeCount";
import { LikeButton } from "./LikeButton";
import { CommentButton } from "./CommentButton";

interface PhotoPostProps extends ChakraProps {
  imgSrc: StaticImageData;
}

export function PhotoPost({ imgSrc, ...props }: PhotoPostProps) {
  return (
    <>
      <Box
        borderRadius="md"
        overflow="hidden"
        paddingBottom="68.2%"
        position="relative"
        width="100%"
      >
        <Image alt="Utah" src={imgSrc} layout="fill" objectFit="cover" />
      </Box>
      <Box>
        <HStack spacing="5" mb="3">
          <LikeButton />
          <CommentButton />
        </HStack>
        <LikeCount likeCount={99} />
        <Text
          fontFamily="FontAntenna"
          color="gray.600"
          fontWeight="300"
          lineHeight={7}
        >
          <Text fontWeight="500" color="text.darknavy" as="span" pr="2">
            Daytona2021
          </Text>
          Great afternoon checking out Zion National Park with Great afternoon
          checking out Zion National Park with Great afternoon checking out Zion
          National Park with Great afternoon checking out Zion National Park
          with
          <Link passHref href="http://twitter.com/mattwoodnyc">
            <ChakraLink color="#0276B3" fontWeight="500" pl="1">
              @freeBritney2021
            </ChakraLink>
          </Link>
        </Text>
      </Box>
    </>
  );
}
