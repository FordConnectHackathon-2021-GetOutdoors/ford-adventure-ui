import { addDomEvent } from "@chakra-ui/utils";
import { AnimatePresence } from "framer-motion";
import { Avatar, Box, Button, Text, Flex, VStack } from "@chakra-ui/react";
import { DeviceContext } from "utils/DeviceContext";
import { Header } from "../components/Header/Header";
import { MotionBox } from "components/motion";
import Image from "next/image";
import { PhotoPost } from "../components/PhotoPost/PhotoPost";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
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

  const slides = useMemo(() => {
    return [
      <Slide key="photos" headerHeight={headerHeight}>
        <PhotoPost imgSrc={utah} />
        <PhotoPost imgSrc={utah} />
        <PhotoPost imgSrc={utah} />
      </Slide>,

      <Slide key="leaderboard" headerHeight={headerHeight}>
        <Box
          borderRadius="md"
          overflow="hidden"
          paddingBottom="68.2%"
          position="relative"
          width="100%"
        >
          <Image alt="Utah" src={utah} layout="fill" objectFit="cover" />
        </Box>
        <Box> asd</Box>
      </Slide>,
      <Slide key="badges" headerHeight={headerHeight}>
        <Box> asd</Box>
      </Slide>,
    ];
  }, [headerHeight]);

  return (
    <Flex flexDir="column">
      <Flex flexShrink={1} flexDir="column" ref={headerRef}>
        <Header />
        <Flex overflow="auto" px="8" pt="1">
          {dashboardTabs.map((tab: any, idx: number) => {
            return (
              <Flex
                key={idx}
                flexGrow={1}
                sx={{
                  borderBottom: (props) =>
                    idx === currentSlide ? "3px solid" : "1px solid",
                  borderColor: (props) =>
                    idx === currentSlide ? "text.darknavy" : "gray",
                }}
                px={2}
              >
                <Button
                  flexGrow={1}
                  key={tab.id}
                  onClick={() => handleChangeIndex(idx)}
                  variant="tabs"
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
          height: `calc(var(--100vh) - ${headerHeight || 0}px)`,
        }}
      >
        <AnimatePresence>{slides[currentSlide]}</AnimatePresence>
      </Box>
    </Flex>
  );
}

interface SlideProps {
  headerHeight: number | undefined;
  children: React.ReactNode;
}

export function Slide({ headerHeight, children }: SlideProps) {
  return (
    <MotionBox
      minHeight={
        headerHeight ? `calc(var(--100vh) - ${headerHeight || 0}px)` : "100px"
      }
      overflowY="scroll"
      position="relative"
      width="100%"
    >
      <VStack spacing="4" px={8} pt="6" pb="20" w="100%" position="absolute">
        {children}
      </VStack>
    </MotionBox>
  );
}
