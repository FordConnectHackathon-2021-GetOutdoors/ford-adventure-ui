import { Box, Button, chakra, Flex, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import Image from "next/image";
import Fullscreen from "components/Fullscreen";

const defaultOptions = [
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
    imageSrc: "/images/arches.png",
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

export const Carousel = ({ options = defaultOptions, filters }: any) => {
  return (
    <>
      <Box as={SwipeableViews} position="fixed" w="100%">
        {options.map((option: any, i: number) => {
          const { imageSrc, displayName, tagLine } = option;
          return (
            <Fullscreen key={i}>
              <Image
                height="2000%"
                width="100px"
                src={imageSrc}
                alt={`${displayName} ${tagLine}`}
              />
            </Fullscreen>
          );
        })}
      </Box>
      <chakra.header h="24" position="relative" zIndex={2}>
        <asd></asd>
      </chakra.header>

      <HStack pl="9" spacing={3}>
        {filters.map((filter: any) => {
          return (
            <Button
              key={filter.id}
              // mx={2}
              variant="pill"
              // px={5}
              // py={3}
              borderRadius="3rem"
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

//  // <Box>
//       {/*  */}
//     // </Box>
