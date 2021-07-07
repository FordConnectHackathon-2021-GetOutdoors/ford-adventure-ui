import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";
import { Header } from "components/Header/Header";
import React from "react";
import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MotionBox } from "components/motion";
import { AnimatePresence } from "framer-motion";
import { Heading } from "themes/typography";

export const defaultAdventure = {
  id: "234",
  displayName: "Zion  ",
  tagLine: "Utah's First National Park",
  distance: "4 Hrs 9 Min, 268 Miles",
  points: 225,
  content: "Hello World",
  imageSrc: "/images/arches.png",
};

interface AdventureProps {
  adventure: object;
  children: React.ReactNode;
}

export default function Adventure({
  adventure = defaultAdventure,
  ...props
}: AdventureProps) {
  const { displayName, points, distance, tagLine } = adventure;
  return (
    <Fullscreen bg="white">
      <Header />

      <Box position="absolute" bottom="0" h="25%" w="100%">
        {/* @ts-ignore */}
        <AnimatePresence>
          <MotionBox
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            layout="position"
            position="absolute"
            left={0}
            right={0}
            px={10}
          >
            <Heading variant="SummaryTitle">{displayName}</Heading>
            <Flex>
              <Flex alignItems="center">
                <Icon width="5" height="5" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="7.5" fill="#F7C30C" stroke="white" />
                  <path
                    d="M8 3L9.12257 6.45492H12.7553L9.81636 8.59017L10.9389 12.0451L8 9.90983L5.06107 12.0451L6.18364 8.59017L3.24472 6.45492H6.87743L8 3Z"
                    fill="white"
                  />
                </Icon>
                <Text color="white" pl={2}>
                  {points} Points
                </Text>
              </Flex>
              <Flex alignItems="center" pl={5}>
                <Icon width="5" height="5" viewBox="0 0 16 16">
                  <circle
                    cx="8"
                    cy="8"
                    r="7.5"
                    stroke="white"
                    fill="transparent"
                  />
                  <path
                    d="M8 4.5V8.5L10.5 10.5"
                    stroke="white"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Text color="white" pl={2}>
                  {distance}
                </Text>
              </Flex>
            </Flex>
            <Heading variant="SummaryTagline">{tagLine}</Heading>
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Fullscreen>
  );
}
