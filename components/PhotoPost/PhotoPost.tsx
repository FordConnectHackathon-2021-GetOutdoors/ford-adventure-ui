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

import TimeAgo from "javascript-time-ago";
import colors from "themes/colors";

const timeAgo = new TimeAgo("en-US");

interface PhotoPostProps extends ChakraProps {
  imgSrc: StaticImageData;
  username: string;
  vehicleName: string;
  created: string;
  content: string;
}

export function PhotoPost({
  username,
  vehicleName,
  created,
  content,
  imgSrc,
  ...props
}: PhotoPostProps) {
  return (
    <VStack pb="8" w="100%">
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
            {username}
          </Text>
          <Flex direction="row" justifyContent="space-between" width="100%">
            <Button
              variant="solid"
              colorScheme="blue"
              px="3.5"
              py=".4rem"
              fontSize="xs"
              lineHeight="1"
            >
              {vehicleName}
            </Button>
            <Text color={colors.text.darkgrey}>
              {timeAgo.format(new Date(created))}
            </Text>
          </Flex>
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

      <Box width="100%">
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
            {username}
          </Text>
          <Text>{content}</Text>
        </Text>
      </Box>
    </VStack>
  );
}
