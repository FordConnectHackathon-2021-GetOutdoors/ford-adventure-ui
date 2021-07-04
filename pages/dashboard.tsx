import { Header } from "../components/Carousel/Header";
import React from "react";
import Fullscreen from "../components/Fullscreen";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Link as ChakraLink,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import utah from "../public/images/utah.png";

const dashboardTabs = [
  {
    id: "photos",
    displayName: "Photos",
  },
  {
    id: "leaderboard",
    displayName: "Leaderboard",
  },
  {
    id: "badges",
    displayName: "Badges",
  },
];

export default function Dashboard() {
  // const { user } = Auth.useUser();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Fullscreen
      // justifyContent="center"
      alignItems="flexT"
      bg="white"
      // w="100%"
      h="var(--100vh)"
    >
      <Header />
      <Flex overflow="auto" alignItems="stretch" px="8" pt="1">
        {dashboardTabs.map((tab: any, idx: number) => {
          return (
            <Flex
              key={idx}
              flexGrow={1}
              sx={{
                borderBottom: (props) =>
                  idx === currentSlide ? "3px solid navy" : "1px solid gray",
              }}
              px={4}
            >
              <Button
                flexGrow={1}
                key={tab.id}
                onClick={() => slider.moveToSlideRelative(idx)}
                variant="dashboardTabs"
              >
                <Box sx={{ opacity: 0, pointerEvents: "none" }}>
                  {tab.displayName}
                </Box>
                <Box
                  position="absolute"
                  sx={{ fontWeight: idx === currentSlide ? 600 : 400 }}
                >
                  {tab.displayName}
                </Box>
              </Button>
            </Flex>
          );
        })}
      </Flex>

      <div
        // @ts-ignore
        ref={sliderRef}
        className="keen-slider"
        style={{ display: "flex", flexGrow: 1 }}
      >
        <div className="keen-slider__slide">
          <VStack
            spacing="4"
            alignItems="flex-start"
            pt="6"
            bg="white"
            flexDir="column"
            h="100%"
            w="100%"
            overflow="auto"
            px={8}
          >
            <Flex w="100%">
              <Avatar src="/images/carAvatar.png" w="4rem" h="4rem" />
              <Flex
                ml="4"
                flexDir="column"
                justify="flex-end"
                alignItems="flex-start"
                pb="3"
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
              borderRadius="md"
              overflow="hidden"
              paddingBottom="68.2%"
              position="relative"
              width="100%"
            >
              <Image alt="Utah" src={utah} layout="fill" objectFit="cover" />
            </Box>
            <HStack spacing="5">
              <Button>
                <Icon
                  width="26"
                  height="26"
                  fill="none"
                  viewBox="0 0 26 26"
                  aria-label="Comment"
                >
                  <path
                    stroke="#102B4E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6.44 13.8H3a2 2 0 00-2 2V23a2 2 0 002 2h3.44m0-11.2L9.198 2.77A2.336 2.336 0 0111.464 1v0A2.336 2.336 0 0113.8 3.336V9.32h9.28v0c1.06 0 1.92.86 1.92 1.92v.16a2.08 2.08 0 01-2.08 2.08h-.48.692a1.71 1.71 0 011.702 1.54v0a1.71 1.71 0 01-1.49 1.867L22.44 17l.211.018c.966.08 1.709.887 1.709 1.857v0c0 .94-.7 1.733-1.633 1.85l-.927.115.31.044a2.068 2.068 0 011.768 2.22v0A2.068 2.068 0 0121.817 25H6.44m0-11.2V25"
                  />
                </Icon>
              </Button>
              <Button>
                <Icon
                  width="26"
                  height="26"
                  fill="none"
                  viewBox="0 0 24 23"
                  aria-label="Comment"
                >
                  <path
                    stroke="#102B4E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 17.26h-5.652v3.566a1 1 0 01-1.651.759l-5.045-4.324H3a2 2 0 01-2-2V3a2 2 0 012-2h18a2 2 0 012 2v12.26a2 2 0 01-2 2z"
                  />
                </Icon>
              </Button>
            </HStack>
            <Box>
              <Text
                fontFamily="FontAntennaCond"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wide"
                mb="1"
              >
                100 Likes
              </Text>
              <Box color="gray">
                <Text
                  fontFamily="FontAntenna"
                  fontWeight="600"
                  color="text.darknavy"
                >
                  Daytona2021
                </Text>
                <Text>
                  Great afternoon checking out Zion National Park with
                  <Link passHref href="http://twitter.com/mattwoodnyc">
                    <ChakraLink color="text.darknavy" pl="1">
                      @freeBritney2021
                    </ChakraLink>
                  </Link>
                </Text>
              </Box>
            </Box>
          </VStack>
        </div>
        <div className="keen-slider__slide" style={{ background: "green" }}>
          2
        </div>
        <div className="keen-slider__slide" style={{ background: "red" }}>
          3
        </div>
      </div>
    </Fullscreen>
  );
}
