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
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";

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
                justify="flex-end"
                ml="auto"
                textTransform="uppercase"
                fontSize="xs"
              >
                2 hours ago
              </Flex>
            </Flex>
            <Box
              position="relative"
              width="100%"
              paddingBottom="60%"
              bg="blue"
              borderRadius="md"
              overflow="hidden"
            >
              <Image alt="Utah" src={utah} layout="fill" objectFit="cover" />
            </Box>
            <Box>
              <Icon width="26" height="26" viewBox="0 0 26 26">
                <path
                  d="M6.44 13.8H3C1.89543 13.8 1 14.6954 1 15.8V23C1 24.1046 1.89543 25 3 25H6.44M6.44 13.8L9.19763 2.76948C9.45761 1.72955 10.392 1 11.4639 1V1C12.7541 1 13.8 2.04589 13.8 3.33606V9.32H23.08V9.32C24.1404 9.32 25 10.1796 25 11.24V11.4C25 12.5488 24.0688 13.48 22.92 13.48H22.44H23.1324C24.011 13.48 24.7466 14.1457 24.834 15.0199V15.0199C24.9263 15.9433 24.2654 16.7718 23.3445 16.8869L22.44 17L22.6511 17.0176C23.617 17.0981 24.36 17.9055 24.36 18.8748V18.8748C24.36 19.8147 23.6601 20.6075 22.7275 20.7241L21.8 20.84L22.1094 20.8842C23.1935 21.0391 23.969 22.0121 23.878 23.1035V23.1035C23.7887 24.1754 22.8926 25 21.8169 25H20.52H6.44M6.44 13.8V25"
                  stroke="ff0"
                  strokeWidth=".5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Icon>
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
