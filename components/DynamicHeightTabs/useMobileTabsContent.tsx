import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { addDomEvent } from "@chakra-ui/utils";
import { Box } from "@chakra-ui/react";
import { PhotoPost } from "components/PhotoPost/PhotoPost";
import Image from "next/image";
import utah from "../../public/images/utah.png";
import { TabContent } from "./TabContent";

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
        <PhotoPost imgSrc={utah} />
        <PhotoPost imgSrc={utah} />
        <PhotoPost imgSrc={utah} />
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
        <Box> asd</Box>
      </TabContent>,
      <TabContent key="badges" headerHeight={headerHeight}>
        <Box>asd</Box>
      </TabContent>,
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
