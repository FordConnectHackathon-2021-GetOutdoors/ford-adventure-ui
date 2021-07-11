import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { addDomEvent } from "@chakra-ui/utils";
import { AnimatePresence } from "framer-motion";
import { Box, Button, chakra, Flex, VStack } from "@chakra-ui/react";
import { Header } from "components/Header/Header";
import { MotionBox } from "components/motion";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import { PhotoUpload } from "components/PhotoUpload/PhotoUpload";
import fetcher from "utils/fetcher";
import useFordUser from "utils/useFordUser";
import Image from "next/image";

import utah from "../public/images/utah.png";
import fordUser from "./api/fordUser";

const isTokenRequest = (ctx: any) =>
  ctx.query.code &&
  ctx.req.headers.referer === "https://fordconnect.cv.ford.com/";

export async function getServerSideProps(context) {
  return isTokenRequest(context)
    ? { props: { code: context.query.code } }
    : { props: {} };
}

const dashboardTabs = [
  { id: "photos", displayName: "Photos" },
  { id: "leaderboard", displayName: "Leaderboard" },
  { id: "badges", displayName: "Badges" },
];

export default function Dashboard({ code }: any) {
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
        <Box>asd</Box>
      </Slide>,
    ];
  }, [headerHeight]);

  // Save code to session fo
  const { mutateUser } = useFordUser();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const saveCodeToSession = async () => {
      try {
        mutateUser(
          await fetcher("/api/fordLogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
          })
        );
      } catch (error) {
        console.error("An unexpected error happened:", error);
        setErrorMsg(error.data.message);
      }
    };

    if (code) {
      saveCodeToSession();
    }
  }, [code, setErrorMsg, mutateUser]);

  return (
    <>
      <PhotoUpload />
      {errorMsg && errorMsg}
      {!fordUser && (
        <chakra.a
          href="https://fordconnect.cv.ford.com/common/login/?make=F&application_id=afdc085b-377a-4351-b23e-5e1d35fb3700&client_id=30990062-9618-40e1-a27b-7c6bcb23658a&response_type=code&state=123&redirect_uri=https%3A%2F%2Flocalhost%3A3000&scope=access"
          bg="transparent"
          p="5"
          pos="fixed"
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
            Connect
          </Box>
        </chakra.a>
      )}
      <Flex flexDir="column">
        <Flex flexShrink={1} flexDir="column" ref={headerRef}>
          <Header />
          {code && <Box fontSize="5xl">{code}</Box>}
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
    </>
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
