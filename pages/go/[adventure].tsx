import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";
import { Header } from "components/Header/Header";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@chakra-ui/icons";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { MotionBox } from "components/motion";
import { AnimatePresence } from "framer-motion";
import { addDomEvent } from "@chakra-ui/utils";
import { useRouter } from "next/router";

const adventureTabs = [
  {
    id: "photos",
    displayName: "About",
  },
  {
    id: "leaderboard",
    displayName: "Activities",
  },
  {
    id: "badges",
    displayName: "Badges",
  },
];

export const defaultAdventure = {
  id: "234",
  displayName: "Zion National Park",
  tagLine: "Utah's First National Park",
  distance: "4 Hrs 9 Min, 268 Miles",
  points: 225,
  content: "Hello World",
  imageSrc: "/images/zion.png",
};

interface AdventureProps {
  adventure: object;
  children: React.ReactNode;
}

export default function Adventure({
  adventure = defaultAdventure,
  ...props
}: AdventureProps) {
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

  const router = useRouter();
  const {
    query: { type: queryType },
  } = router;

  // const [currentFilter, setFilter] = useState("beach");
  // useEffect(
  //   () => {
  //     !queryType && router.push({ query: { type: "beach" } });
  //     queryType && queryType !== currentFilter && setFilter(`${queryType}`);
  //   },
  //   // eslint-disable-next-line
  //   [queryType]
  // );

  // @ts-ignore
  const {
    displayName,
    id,
    points,
    distance,
    // tagLine,
    imageSrc,
  }: any = adventure;
  return (
    <>
      <Header variant="overlay" />

      <Box
        position="absolute"
        top="0"
        h="38.2%"
        w="100%"
        bgImg={imageSrc}
        backgroundSize="100vw"
        backgroundPosition="center"
      >
        {/* @ts-ignore */}
        <AnimatePresence>
          <MotionBox
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            layout="position"
            position="absolute"
            left={0}
            right={0}
            px={10}
            bottom={12}
            display="flex"
            flexDir="column"
            alignContent="flex-start"
            justifyContent="flex-end"
            h="100%"
            // alignItems="flex-end"
          >
            <Heading
              variant="SummaryTitle"
              // @ts-ignore
              fontSize={["4vh", "8vh", "10vh", , "12vh"]}
              mb={2}
            >
              {displayName}
            </Heading>
            <Flex>
              <Flex alignItems="center">
                <Icon width="5" height="5" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="7.5" fill="#F7C30C" stroke="white" />
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
          </MotionBox>
        </AnimatePresence>
      </Box>

      <Flex mt="38.2%" overflow="auto" px="10" pt="8">
        {adventureTabs.map((tab: any, idx: number) => {
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
    </>
  );
}
