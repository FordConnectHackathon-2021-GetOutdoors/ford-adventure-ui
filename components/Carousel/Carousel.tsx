import {
  Box,
  Button,
  chakra,
  filter,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Img,
  Text,
} from "@chakra-ui/react";
import { MotionBox } from "components/motion";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { displayName } from "react-tinder-card";
import { Header } from "./Header";

export const defaultFilters = [
  {
    id: "123",
    displayName: "Desert",
  },

  {
    id: "576",
    displayName: "Beach",
  },
  {
    id: "453",
    displayName: "Mountains",
  },
  {
    id: "678",
    displayName: "Spa",
  },
  {
    id: "890",
    displayName: "Clubbing",
  },
];

export const defaultOptions = [
  {
    id: "234",
    displayName: "Zion National Park",
    tagLine: "Utah's First National Park",
    distance: "4 Hrs 9 Min, 268 Miles",
    points: 225,
    content: "Hello World",
    imageSrc: "/images/zion.png",
  },
  {
    id: "234",
    displayName: "Zion  Park",
    tagLine: "Utah's First National Park",
    distance: "4 Hrs 9 Min, 268 Miles",
    points: 225,
    content: "Hello World",
    imageSrc: "/images/arches.png",
  },
  {
    id: "234",
    displayName: " National Park",
    tagLine: "Utah's First National Park",
    distance: "4 Hrs 9 Min, 268 Miles",
    points: 225,
    content: "Hello World",
    imageSrc: "/images/zion.png",
  },
  {
    id: "234",
    displayName: "Zion  ",
    tagLine: "Utah's First National Park",
    distance: "4 Hrs 9 Min, 268 Miles",
    points: 225,
    content: "Hello World",
    imageSrc: "/images/arches.png",
  },
];

export const Carousel = ({
  options = defaultOptions,
  filters = defaultFilters,
}: any) => {
  const [selectedFilter, setSelected] = useState("123");
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
      <Box
        position="fixed"
        w="100vw"
        h="100vh"
        overflow="hidden"

        // zIndex="-1"
      >
        <SwipeableViews
          index={slideIndex}
          onChangeIndex={(i: any) => {
            setSlideIndex(i);
          }}
        >
          {options.map((option: any, i: number) => {
            const { imageSrc, displayName, tagLine } = option;
            return (
              <Box width="100%" height="var(--100vh)" key={i}>
                <Img
                  src={imageSrc}
                  alt={`${displayName} ${tagLine}`}
                  key={i}
                  height="100%"
                  width="100%"
                  layout="fixed"
                  position="fixed"
                  objectFit="cover"
                />
              </Box>
            );
          })}
        </SwipeableViews>
      </Box>

      <Box position="absolute" bottom="0" h="25%" w="100%">
        {/* @ts-ignore */}
        <AnimatePresence>
          {options.map((option: any, i: number) => {
            const { displayName, points, distance, tagLine } = option;
            if (i !== slideIndex) return;
            return (
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
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        fill="#F7C30C"
                        stroke="white"
                      />
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
            );
          })}
        </AnimatePresence>
      </Box>

      <HStack
        px="9"
        spacing={3}
        overflow="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {filters.map((filter: any, i: number) => {
          return (
            <Button
              isSelected={filter.id === selectedFilter}
              key={filter.id}
              variant="pill"
              borderRadius="3rem"
              onClick={() => setSelected(filter.id)}
            >
              {filter.displayName}
            </Button>
          );
        })}
      </HStack>
    </>
  );
};

export const items = [];
