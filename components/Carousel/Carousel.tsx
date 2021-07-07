import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { SliderButton } from "./SliderButton";
import { MotionBox } from "components/motion";
import { AnimatePresence } from "framer-motion";
import { displayName } from "react-tinder-card";
import { FaHourglassStart } from "react-icons/fa";

type CarouselProps = {
  filterBy: string;
};

export function Carousel({ ...props }: CarouselProps) {
  const arrowStyles = {
    cursor: "pointer",
    // position: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    // userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      id: "123123123",
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "Zion National Park",
      points: 23,
      distance: "120 miles, 4.2 hours",
      tagLine: "The best place on planet earth",
    },
    {
      id: "123123123",
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "Zion National Park",
      points: 23,
      distance: "120 miles, 4.2 hours",
      tagLine: "The best place on planet earth",
    },
    {
      id: "1276783123123",
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      displayName: "Zion National Park",
      points: 23,
      distance: "120 miles, 4.2 hours",
      tagLine: "The best place on planet earth",
    },
    {
      id: "123434534123123",
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "Zion National Park",
      points: 23,
      distance: "120 miles, 4.2 hours",
      tagLine: "The best place on planet earth",
    },
    {
      id: "123123456123",
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "Zion National Park",
      points: 23,
      distance: "120 miles, 4.2 hours",
      tagLine: "The best place on planet earth",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      width="100vw"
      bg={useColorModeValue("gray.200", "gray.600")}
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      // zIndex={-1}
    >
      <Flex h="var(--100vh)" width="100vw" overflow="hidden" pos="relative">
        <Flex h="var(--100vh)" width="100vw" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              h="var(--100vh)"
              width="100vw"
              shadow="md"
              flex="none"
              position="relative"
            >
              <Image
                alt={`${sid}`}
                h="var(--100vh)"
                objectFit="cover"
                src={slide.img}
                width="100vw"
              />

              <Box position="absolute" bottom="0" h="25%" w="100%">
                {/* @ts-ignore */}
                <AnimatePresence>
                  <MotionBox
                    initial={{ y: 20 }}
                    animate={{ opacity: 1 }}
                    // exit={{ opacity: 0, y: -20 }}
                    layout="position"
                    position="absolute"
                    left={0}
                    right={0}
                    px={10}
                  >
                    <Heading variant="SummaryTitle">
                      {slide.displayName}
                    </Heading>
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
                        <Flex color="white" pl={2}>
                          <Text>{slide.points}</Text>
                          <Text pl={1}>Points</Text>
                        </Flex>
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
                        <Flex color="white" pl={2}>
                          <Text>{slide.distance || "Who cares!"}</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Heading variant="SummaryTagline">{slide.tagLine}</Heading>
                  </MotionBox>
                </AnimatePresence>
              </Box>
            </Box>
          ))}
        </Flex>
        <SliderButton {...arrowStyles} onClick={prevSlide} left="5">
          ◀
        </SliderButton>
        <SliderButton {...arrowStyles} onClick={nextSlide} right="5">
          ▶
        </SliderButton>
      </Flex>
    </Flex>
  );
}
