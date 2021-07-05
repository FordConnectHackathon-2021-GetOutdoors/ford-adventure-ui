import React from "react";
import Image from "next/image";
import {
  Box,
  Link as ChakraLink,
  HStack,
  Text,
  ChakraProps,
  Avatar,
  Button,
  Flex,
  VStack,
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
    <VStack pb="8">
      <Flex w="100%" pb={1}>
        <Avatar src="/images/carAvatar.png" w="4rem" h="4rem" />
        <Flex
          ml="4"
          flexDir="column"
          justify="flex-end"
          alignItems="flex-start"
          pb="2"
        >
          <Text fontWeight="500" mb="2" lineHeight="1">
            Daytona2021
          </Text>
          <Button
            variant="solid"
            colorScheme="blue"
            px="3.5"
            py=".4rem"
            fontSize="xs"
            lineHeight="1"
          >
            Mach-E
          </Button>
        </Flex>
        <Flex
          flexDir="column"
          fontSize="xs"
          justify="flex-end"
          ml="auto"
          textTransform="uppercase"
        >
          2 hours ago
        </Flex>
      </Flex>

      <Box
        borderRadius="xl"
        overflow="hidden"
        paddingBottom="68.2%"
        position="relative"
        width="100%"
      >
        <Image alt="Utah" src={imgSrc} layout="fill" objectFit="cover" />
      </Box>

      <Box>
        <HStack spacing="5" pt="2" pb="3">
          <Flex>
            <LikeButton />
            <LikeCount likeCount={100} />
          </Flex>
          <Flex>
            <CommentButton />
            <LikeCount likeCount={3} />
          </Flex>
        </HStack>
        {/* <LikeCount likeCount={99} /> */}
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
    </VStack>
  );
}
