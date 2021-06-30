import {
  Box,
  Button,
  chakra,
  filter,
  Flex,
  Grid,
  HStack,
  Img,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

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
    displayName: "Country",
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
    displayName: "Zion National Park",
    tagLine: "Utah's First National Park",
    distance: "4 Hrs 9 Min, 268 Miles",
    points: 225,
    content: "Hello World",
    imageSrc: "/images/arches.png",
  },
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
    displayName: "Zion National Park",
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
  const [selected, setSelected] = useState("123");
  const [index, setIndex] = useState(0);

  return (
    <>
      <Box
        as={SwipeableViews}
        position="fixed"
        w="100vw"
        h="100vh"
        index={index}
        onChange={(i: any) => setIndex(i)}
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
      </Box>
      <Flex
        as="header"
        h="24"
        position="relative"
        zIndex={2}
        p="10"
        justify="space-between"
        color="white"
      >
        <Box>LOGO</Box>
        <Box>MENU</Box>
      </Flex>

      <HStack pl="9" spacing={3}>
        {filters.map((filter: any) => {
          return (
            <Button
              isSelected={filter.id === selected}
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
