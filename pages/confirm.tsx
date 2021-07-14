import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "components/Header/Header";
import { MotionBox } from "components/motion";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { supabase } from "utils/supabase";
import { addDomEvent } from "@chakra-ui/utils";

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
      >
        <MotionBox
          as={motion.li}
          fontFamily="FontAntennaCond"
          fontWeight="300"
          fontSize="4xl"
          lineHeight="1"
          color="text.darknavy"
        >
          you’re all set!
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
