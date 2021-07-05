import { Header } from "../components/Header/Header";
import React, { useContext, useEffect, useRef, useState } from "react";

import { Avatar, Box, Button, Text, Flex, VStack } from "@chakra-ui/react";
import { PhotoPost } from "../components/PhotoPost/PhotoPost";

import utah from "../public/images/utah.png";
import { addDomEvent } from "@chakra-ui/utils";

import { DeviceContext } from "utils/DeviceContext";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "components/motion";

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

  const { isDesktopOrLaptop } = useContext(DeviceContext);

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

      <Box
        sx={{
          height: headerHeight
            ? `calc(var(--100vh) - ${headerHeight || 0}px)`
            : "130px",
        }}
      >
        <AnimatePresence>
          {currentSlide === 0 ? (
            <Slide headerHeight={headerHeight}>
              <PhotoPost imgSrc={utah} />
              <PhotoPost imgSrc={utah} />
              <PhotoPost imgSrc={utah} />
            </Slide>
          ) : currentSlide === 1 ? (
            <Slide headerHeight={headerHeight}>2</Slide>
          ) : currentSlide === 2 ? (
            <Slide headerHeight={headerHeight}>3</Slide>
          ) : (
            <Slide headerHeight={headerHeight}>asdasd</Slide>
          )}
        </AnimatePresence>
      </Box>
    </Flex>
  );
}

interface SlideProps {
  headerHeight: number | undefined;
  children: React.ReactNode;
}

function Slide({ headerHeight, children }: SlideProps) {
  return (
    <MotionBox
      width="100%"
      minHeight={
        headerHeight ? `calc(var(--100vh) - ${headerHeight || 0}px)` : "100px"
      }
      position="relative"
      overflowY="scroll"
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
    </MotionBox>
  );
}
