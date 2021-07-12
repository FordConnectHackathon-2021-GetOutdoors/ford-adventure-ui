import { Header } from "components/Header/Header";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Stack,
  Grid,
  GridItem,
  chakra,
} from "@chakra-ui/react";
import useFordUser from "utils/useFordUser";
import Link from "next/link";
import { MotionBox } from "components/motion";
import { AnimatePresence } from "framer-motion";
import { addDomEvent } from "@chakra-ui/utils";
import { useRouter } from "next/router";
import Image from "next/image";
import thumb1 from "../../public/images/thumb1.jpg";
import thumb2 from "../../public/images/thumb2.jpg";
import { supabase } from "utils/supabase";

const ContinueButton = ({ adventure }: any) => (
  <Link href={`/vehicle?adventure=${adventure.slug}`} passHref>
    <Button
      as="a"
      bg="transparent"
      p="5"
      aria-label={`Visit ${adventure!.displayName}`}
      bottom="0"
      zIndex="4"
      w="100%"
    >
      <Box
        bg="bg.darknavy"
        color="white"
        fontFamily="FontAntenna"
        px="4"
        py="4"
        w="20rem"
        borderRadius="md"
      >
        Continue
      </Box>
    </Button>
  </Link>
);

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

export const getServerSideProps = async (context: any) => {
  if (!context?.params?.adventure) {
    return { props: { server: true } };
  }

  const { data, error } = await supabase
    .from("adventures")
    .select()
    .eq("slug", context?.params?.adventure);

  const adventure = data && {
    ...data[0],
    points: 225,
    distance: "4 Hrs 9 Min, 268 Miles",
    imageSrc: "/images/zion.png",
  };

  return { props: { adventure, server: true } };
};

interface AdventureProps {
  adventure: object;
  children: React.ReactNode;
}

export default function Adventure({
  adventure = defaultAdventure,
  ...props
}: AdventureProps) {
  console.log("🚀 ~ file: [adventure].tsx ~ line 107 ~ adventure", adventure);
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

  const ford = useFordUser();

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
  const { displayName, id, points, distance, tagLine, imageSrc }: any =
    adventure;
  return (
    <>
      <Box
        pos="absolute"
        w="100%"
        zIndex="3"
        bg="linear-gradient(rgba(0,0,0,.5),transparent)"
      >
        <Header variant="overlay" />
      </Box>

      <Box
        position="absolute"
        top="0"
        h="38.2vh"
        w="100%"
        bgImg={imageSrc}
        backgroundSize="100vw"
        backgroundPosition="center"
        zIndex="1"
      >
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
          >
            <Heading
              variant="SummaryTitle"
              // @ts-ignore
              fontSize={["4vh", "8vh", "10vh", , "12vh"]}
              mb={2}
            >
              {displayName}
            </Heading>
            <Heading variant="SummaryTagline" mb={4}>
              {tagLine}
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
                <Text color="white" pl={2} fontSize="xs">
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
                <Text color="white" pl={2} fontSize="xs">
                  {distance}
                </Text>
              </Flex>
            </Flex>
          </MotionBox>
        </AnimatePresence>
      </Box>

      <Box h="var(--100vh)" overflow="scroll" pos="relative" zIndex="2">
        <Flex px="10" bg="white" mt="38.2vh" flexGrow={0}>
          {adventureTabs.map((tab: any, idx: number) => (
            <Flex
              key={tab.id}
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
                pt={8}
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
          ))}
        </Flex>

        <Box bg="white" px={10} pt={5} flexGrow={1} overflow="scroll">
          <AnimatePresence>
            {adventureTabs.map((tab: any, idx: number) => {
              if (idx !== currentSlide) return;

              if (idx === 0) {
                return (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    key={idx}
                  >
                    <Stack spacing={8}>
                      <Box pt="5">
                        <Heading variant="SectionHeading">Hours</Heading>
                        <Grid
                          as="dl"
                          templateColumns="repeat(2,1fr)"
                          pt={2}
                          gap="6"
                        >
                          <GridItem as="dt">
                            <Box>Visitor Center</Box>
                          </GridItem>
                          <GridItem as="dd">
                            <Box>Open Daily 8:00 am – 8:00 pm</Box>
                          </GridItem>
                        </Grid>
                      </Box>
                      <Box>
                        <Flex justify="space-between" alignItems="center">
                          <Heading variant="SectionHeading">Photos</Heading>
                          <Link href="#" passHref>
                            <a>
                              <Flex alignItems="center" py="2">
                                See All <ChevronRightIcon h="5" w="5" ml="1" />
                              </Flex>
                            </a>
                          </Link>
                        </Flex>
                        <Grid
                          as="dl"
                          gap="6"
                          templateColumns="repeat(2,1fr)"
                          py="2"
                        >
                          <GridItem
                            pos="relative"
                            pt="62.8%"
                            borderRadius="lg"
                            overflow="hidden"
                          >
                            <Image src={thumb1} alt="asd" layout="fill" />
                          </GridItem>
                          <GridItem
                            pos="relative"
                            pt="62.8%"
                            borderRadius="lg"
                            overflow="hidden"
                          >
                            <Image src={thumb2} alt="asd" layout="fill" />
                          </GridItem>
                        </Grid>
                      </Box>
                      <Box>
                        <Heading variant="SectionHeading">Description</Heading>
                        <Box pt={5} mb="20">
                          <Text>
                            Follow the paths where ancient native people and
                            pioneers walked. Gaze up at massive sandstone cliffs
                            of cream, pink, and red that soar into a brilliant
                            blue sky. Experience wilderness in a narrow slot
                            canyon. Zion’s unique array of plants and animals
                            will enchant you as you absorb the rich history of
                            the past and enjoy the excitement of present day
                            adventures.
                          </Text>
                        </Box>
                      </Box>
                      {adventure && <ContinueButton adventure={adventure} />}
                    </Stack>
                  </MotionBox>
                );
              }
              if (idx === 1) {
                return (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    key={idx}
                    my="5"
                  >
                    <Stack>
                      <Box>
                        <Heading variant="SectionHeading">Best for</Heading>
                        <Grid templateColumns="repeat(4,1fr)">
                          {[
                            "BACKPACKING",
                            "CAMPING",
                            "CYCLING",
                            "KAYAKING",
                            "ROCK CLIMBING",
                            "STARGAZING",
                            "SUNSETS",
                            "WILDLIFE",
                          ].map((tag: any, idx: number) => (
                            <GridItem
                              key={idx}
                              justify="center"
                              textAlign="center"
                              py="5"
                            >
                              <Icon></Icon>
                              <Box
                                fontSize=".7rem"
                                fontWeight="500"
                                lineHeight="1"
                                pt="2"
                              >
                                {tag}
                              </Box>
                            </GridItem>
                          ))}
                        </Grid>
                      </Box>
                      <Box pt="10" pb="40">
                        git
                        <Heading variant="SectionHeading">Explore</Heading>
                        <Box overflow="hidden" py="10">
                          <Box
                            borderRadius="lg"
                            position="relative"
                            w="100%"
                            pt="62.8%"
                            overflow="hidden"
                          >
                            <Image
                              src="/images/zion.png"
                              alt="post image"
                              layout="fill"
                              objectFit="cover"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Stack>
                  </MotionBox>
                );
              }
              return <h2 key={idx}>{idx}</h2>;
            })}
          </AnimatePresence>
        </Box>
      </Box>
    </>
  );
}
