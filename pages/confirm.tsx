import { Box, Flex, Stack } from "@chakra-ui/react";
import { Header } from "components/Header/Header";
import { MotionBox, MotionBox } from "components/motion";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { supabase } from "utils/supabase";
import { addDomEvent } from "@chakra-ui/utils";
import { item } from "utils/animations";
import { LocationMap } from "components/LocationMap/LocationMap";

export const getServerSideProps = async (context: any) => {
  if (!context?.query?.adventure)
    return {
      redirect: {
        destination: "/go",
        permanent: false,
      },
    };

  const { data, error }: any = await supabase
    .from("adventures")
    .select()
    .eq("slug", context?.query?.adventure);

  return {
    props: {
      adventure: { ...(await data[0]) },
      error,
    },
  };
};

export const AdventureConfirmation = ({ adventure }: any) => {
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

  const handleApiLoaded = (map, maps) => {
    console.log(
      "🚀 ~ file: confirm.tsx ~ line 50 ~ handleApiLoaded ~ maps",
      maps
    );
    console.log(
      "🚀 ~ file: confirm.tsx ~ line 50 ~ handleApiLoaded ~ map",
      map
    );
    // use map and maps objects
  };

  return (
    <MotionBox
      as={Flex}
      flexDir="column"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Flex flexShrink={1} flexDir="column" ref={headerRef}>
        <Header />
      </Flex>
      <Stack
        as={motion.ul}
        initial="hidden"
        animate="visible"
        style={{
          height: `calc(var(--100vh) - ${headerHeight || 0}px)`,
          overflowY: "scroll",
          position: "relative",
        }}
        mx="auto"
        w="100%"
      >
        <MotionBox
          as={motion.li}
          fontFamily="FontAntennaCond"
          fontWeight="300"
          fontSize="4xl"
          lineHeight="1"
          color="text.darknavy"
          textTransform="uppercase"
          px="8"
        >
          Let&apos;s Go!
        </MotionBox>
        <MotionBox
          px={8}
          variants={item}
          fontFamily="FontAntennaCond"
          fontWeight="300"
          fontSize="sm"
          initial={{ opacity: 0, y: 4 }}
          animate={{
            opacity: 1,
            type: "spring",
            y: "0%",
            transition: {
              ease: [0.23, 1, 0.32, 1],
              duration: 1,
            },
          }}
        >
          A NEW ADVENTURE AWAITS
        </MotionBox>
        <MotionBox
          px={8}
          variants={item}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: 1,
            scale: 1,
            type: "spring",
            transition: {
              ease: [0.23, 1, 0.32, 1],
              duration: 2,
            },
          }}
          position="relative"
        >
          <LocationMap />
        </MotionBox>
      </Stack>
    </MotionBox>
  );
};

export const AdventureConfirmationPage = ({ adventure }: any) => {
  return (
    <AnimatePresence>
      {adventure && <AdventureConfirmation adventure={adventure} />}
    </AnimatePresence>
  );
};

export default AdventureConfirmationPage;
