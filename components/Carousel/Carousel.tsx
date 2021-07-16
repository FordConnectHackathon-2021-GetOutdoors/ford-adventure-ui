import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  Heading,
  Icon,
  Link,
} from "@chakra-ui/react";
import { SliderButton } from "./SliderButton";
import { MotionBox } from "components/motion";
import { AnimatePresence } from "framer-motion";
import { supabase } from "utils/supabase";
import { Loading } from "components/Loading";

type CarouselProps = {
  filterBy?: string;
  adventure?: any;
};

const mockSlides = [
  {
    id: "123123123",
    img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    displayName: "Zion National Park",
    points: 23,
    distance: "120 miles, 4.2 hours",
    tagLine: "The best place on planet earth",
    slug: "zions",
  },
  {
    id: "123123123",
    img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    displayName: "Zion National Park",
    points: 23,
    distance: "120 miles, 4.2 hours",
    tagLine: "The best place on planet earth",
    slug: "the-new-beach",
  },
  {
    id: "1276783123123",
    img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    displayName: "Zion National Park",
    points: 23,
    distance: "120 miles, 4.2 hours",
    tagLine: "The best place on planet earth",
    slug: "shelter-island",
  },
  {
    id: "123434534123123",
    img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    displayName: "Zion National Park",
    points: 23,
    distance: "120 miles, 4.2 hours",
    tagLine: "The best place on planet earth",
    slug: "another-one",
  },
];

const arrowStyles = {
  cursor: "pointer",
  top: "50%",
  w: "auto",
  mt: "-22px",
  p: "16px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  _hover: {
    opacity: 0.8,
    bg: "black",
  },
};

export function Carousel({ adventure, ...props }: CarouselProps) {
  const { filterBy }: any = props;

  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  console.log("🚀 ~ file: Carousel.tsx ~ line 88 ~ Carousel ~ slides", slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  async function getSlides() {
    try {
      setLoading(true);
      let { data, error }: any = await supabase
        .from("adventures")
        .select("*")
        .eq("type", filterBy);

      if (error) {
        throw error;
      }

      if (data) {
        setSlides(data);
        setCurrentSlide(0);
        setFilter(filterBy);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    filter !== filterBy && getSlides();
    // eslint-disable-next-line
  }, [filterBy]);

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
  const bg = useColorModeValue("gray.200", "gray.600");

  return (
    <AnimatePresence>
      <MotionBox
        as={Flex}
        width="100vw"
        bg={bg}
        alignItems="center"
        justifyContent="center"
        position="fixed"
        top="0"
      >
        <Flex h="var(--100vh)" width="100vw" overflow="hidden" pos="relative">
          <Flex h="var(--100vh)" width="100vw" {...carouselStyle}>
<<<<<<< HEAD
            {mockSlides.map((slide, sid) => (
=======
            {slides.map((slide: any, sid) => (
>>>>>>> 75f7bf71e9901f05cda054a8e29b3c17317f6ce4
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

                <Flex
                  position="absolute"
                  h="100%"
                  w="100%"
                  bottom="10"
                  justify="center"
                  alignItems="flex-end"
                >
                  {/* @ts-ignore */}
                  <AnimatePresence>
                    <MotionBox
                      initial={{ y: 20 }}
                      animate={{ opacity: 1 }}
                      layout="position"
                      position="absolute"
                      left={0}
                      right={0}
                      px={10}
                      pb={10}
                    >
                      <Link href={`/go/${slide.slug}`}>
                        <a>
                          <Heading
                            variant="SummaryTitle"
                            fontSize={["3.5rem", "clamp(4rem, 20vh, 20rem)"]}
                            whiteSpace="break-spaces"
                          >
                            {slide.displayName}
                          </Heading>
                        </a>
                      </Link>
                      <Heading variant="SectionHeading" my="4" color="white">
                        {slide.tagLine}
                      </Heading>
                      <Flex fontSize={["1rem", "xl", "5xl"]}>
                        <Flex alignItems="center">
                          <Icon
                            width={["5", "7", "8"]}
                            height={["5", "7", "8"]}
                            viewBox="0 0 16 16"
                          >
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
                          <Flex
                            color="white"
                            pl={2}
                            lineHeight={1}
                            fontSize={["2vh", "4vh", "5vh"]}
                          >
                            <Text>{slide.points}</Text>
                            <Text pl={1}>Points</Text>
                          </Flex>
                        </Flex>
                        <Flex alignItems="center" pl={5}>
                          <Icon
                            width={["5", "7", "8"]}
                            height={["5", "7", "8"]}
                            viewBox="0 0 16 16"
                          >
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
                          <Flex
                            color="white"
                            pl={2}
                            lineHeight={1}
                            fontSize={["2vh", "4vh", "5vh"]}
                          >
                            <Text>{slide.distance || "Who cares!"}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Heading variant="SummaryTagline" mt="2">
                        {slide.tagLine}
                      </Heading>
                    </MotionBox>
                  </AnimatePresence>
                </Flex>
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
      </MotionBox>
    </AnimatePresence>
  );
}
