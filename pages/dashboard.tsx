import { Header } from "../components/Carousel/Header";
import React, { useEffect, useRef, useState } from "react";
import Fullscreen from "../components/Fullscreen";
import { Avatar, Box, Button, Text, Flex, VStack } from "@chakra-ui/react";
import { PhotoPost } from "../components/PhotoPost/PhotoPost";

import utah from "../public/images/utah.png";
import { addDomEvent } from "@chakra-ui/utils";
import SwipeableViews from "react-swipeable-views";

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
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleChangeIndex = (index: number) => {
    setCurrentSlide(index);
  };

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeight] = useState(headerRef?.current?.clientHeight);
  useEffect(
    () =>
      addDomEvent(window, "resize", () =>
        setHeight(headerRef?.current?.clientHeight)
      ),
    []
  );
  useEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef?.current?.clientHeight);
    }
  }, [headerRef]);

  return (
    <Flex flexDir="column">
      <Flex flexShrink={1} flexDir="column" ref={headerRef}>
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
                  onClick={() => handleChangeIndex(idx)}
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
      </Flex>

      <SwipeableViews
        index={currentSlide}
        onChangeIndex={handleChangeIndex}
        containerStyle={{
          height: headerHeight
            ? `calc(var(--100vh) - ${headerHeight || 0}px)`
            : "100px",
        }}
      >
        <Slide headerHeight={headerHeight}>
          <PhotoPost imgSrc={utah} />
          <PhotoPost imgSrc={utah} />
          <PhotoPost imgSrc={utah} />
        </Slide>

        <Slide headerHeight={headerHeight}>2</Slide>

        <Slide headerHeight={headerHeight}>3</Slide>
      </SwipeableViews>
    </Flex>
  );

  // return (

  //
  //     </Flex>

  //     <Box
  //       // @ts-ignore
  //       ref={sliderRef}
  //       className="keen-slider"
  //     >
  //       <Slide headerHeight={headerHeight}>
  //         <PhotoPost imgSrc={utah} />
  //         <PhotoPost imgSrc={utah} />
  //         <PhotoPost imgSrc={utah} />
  //       </Slide>
  //       <Slide headerHeight={headerHeight}>2</Slide>

  //       <Slide headerHeight={headerHeight}>3</Slide>
  //     </Box>
  //   </Flex>
  // );
}

interface SlideProps {
  headerHeight: number | undefined;
  children: React.ReactNode;
}

function Slide({ headerHeight, children }: SlideProps) {
  return (
    <Box
      className="keen-slider__slide"
      width="100%"
      minHeight={
        headerHeight ? `calc(var(--100vh) - ${headerHeight || 0}px)` : "100px"
      }
      position="relative"
    >
      <VStack spacing="4" px={8} pt="6" pb="10" w="100%" position="absolute">
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

        {children}
      </VStack>
    </Box>
  );
}
