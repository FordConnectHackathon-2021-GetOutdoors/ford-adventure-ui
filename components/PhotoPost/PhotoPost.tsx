/* eslint-disable react/display-name */
import React from "react";
import Image from "next/image";
import {
  Box,
  HStack,
  Text,
  ChakraProps,
  Button,
  Flex,
  VStack,
  Link as ChakraLink
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar"
import Link from "next/link";
import { LikeCount } from "./LikeCount";
import { LikeButton } from "./LikeButton";
import { CommentButton } from "./CommentButton";

import TimeAgo from "javascript-time-ago";
import colors from "themes/colors";
import Interpolate from "@doist/react-interpolate";

const timeAgo = new TimeAgo("en-US");

interface PhotoPostProps extends ChakraProps {
  imgSrc: StaticImageData;
  username: string;
  vehicleName: string;
  created: string;
  content: string;
  avatarSrc: StaticImageData;
  userUuid: string;
  authUserUuid: string;
  parentRef: any;
  likes: number;
  comments: number;
}

export function PhotoPost({ username, vehicleName, created, content, imgSrc, avatarSrc, userUuid, authUserUuid, parentRef, likes, comments }: PhotoPostProps) {
  return (
    <VStack pb="8" w="100%">
      <Flex w="100%" pb={1}>
        <Avatar src={avatarSrc} w="4rem" h="4rem" />
        <Flex
          ml="4"
          flexDir="column"
          justify="flex-end"
          alignItems="flex-start"
          pb="2"
          w="100%"
        >
          <Box fontWeight="500" mb="2" lineHeight="1">
            {username}
          </Box>
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
            <Box color={colors.text.darkgrey}>
              {timeAgo.format(new Date(created))}
            </Box>
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
        <Image alt="Upload Photo" src={imgSrc} layout="fill" objectFit="cover" />
      </Box>

      <Box width="100%">
        <HStack spacing="5" pt="2" pb="3">
          <Flex>
            <LikeButton />
            <LikeCount likeCount={likes} />
          </Flex>
          <Flex>
            <CommentButton />
            <LikeCount likeCount={comments} />
          </Flex>
        </HStack>
        <Box
          fontFamily="FontAntenna"
          color="gray.600"
          fontWeight="300"
          lineHeight={7}
        >
          <Text fontWeight="500" color="text.darknavy" as="span" pr="2">
            <Link key={Math.random()} href={authUserUuid == userUuid ? `/profile/me` : `/profile/${userUuid}`} passHref>
              {username}
            </Link>
          </Text>
          <Text>
            <Interpolate
                string={content}
                mapping={{
                    mention: text => (
                      <Link key={Math.random()} href="/profile/me" passHref>
                        <a style={{
                          textDecoration: "underline",
                          color: `${colors.text.link}`,
                        }}>@{text}</a>
                      </Link>
                    ),
                    hashtag: text => {
                      const tag = text[0]['props']['children'];
                      return (
                      <ChakraLink key={Math.random()} onClick={() => {
                        parentRef.current();
                      }}>
                        <a style={{
                          textDecoration: "underline",
                          color: `${colors.text.link}`,
                        }}>#{text}</a>
                      </ChakraLink>
                    )},
                }}
            />
          </Text>
        </Box>
      </Box>
    </VStack>
  );
}
