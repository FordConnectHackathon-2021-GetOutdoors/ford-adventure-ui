import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { addDomEvent } from "@chakra-ui/utils";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import { Avatar } from "@chakra-ui/avatar";
import Image from "next/image";
import utah from "../../public/images/utah.png";
import { TabContent } from "./TabContent";
import { PhotoFeed } from "components/PhotoFeed/PhotoFeed";
import colors from "themes/colors";
import TimeAgo from "javascript-time-ago";
const timeAgo = new TimeAgo("en-US");
export const useMobileTabsContent = () => {
  const [currentTabContent, setCurrentTabContent] = React.useState(0);
  const handleChangeIndex = (index: number) => {
    setCurrentTabContent(index);
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

  const TabsContent = useMemo(() => {
    return [
      <TabContent key="photos" headerHeight={headerHeight}>
        <PhotoFeed />
      </TabContent>,

      <TabContent key="leaderboard" headerHeight={headerHeight}>
        <Box
          borderRadius="md"
          overflow="hidden"
          paddingBottom="68.2%"
          position="relative"
          width="100%"
        >
          <Image alt="Utah" src={utah} layout="fill" objectFit="cover" />
        </Box>

        <VStack pb="8" w="100%">
          <Flex w="100%" pb={1}>
            <Avatar bg="text.darknavy" w="4rem" h="4rem" />
            <Flex
              ml="4"
              flexDir="column"
              justify="flex-end"
              alignItems="flex-start"
              pb="2"
              w="100%"
            >
              <Box fontWeight="500" mb="2" lineHeight="1">
                Daytona2101
              </Box>
              <Flex direction="row" justifyContent="space-between" width="100%">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  px="3.5"
                  py=".4rem"
                  fontSize="xs"
                  lineHeight="1"
                >
                  Daytona2021
                </Button>
                <Box color={colors.text.darkgrey}>
                  {timeAgo.format(new Date())}
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </VStack>
      </TabContent>,
      <TabContent key="badges" headerHeight={headerHeight}></TabContent>,
    ];
  }, [headerHeight]);

  return {
    currentTabContent,
    handleChangeIndex,
    headerHeight,
    headerRef,
    TabsContent,
  };
};
