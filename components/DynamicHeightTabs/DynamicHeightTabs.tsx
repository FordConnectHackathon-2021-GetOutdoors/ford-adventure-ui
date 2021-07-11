import React from "react";
import { AnimatePresence } from "framer-motion";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Header } from "components/Header/Header";
import { dashboardTabs } from "../../pages/index";

interface TabsProps {
  currentTabContent: number;
  handleChangeIndex: (index: number) => void;
  headerHeight: string;
  headerRef: React.RefObject<HTMLDivElement>;
  TabsContent: JSX.Element[];
}

function DynamicHeightTabs({
  currentTabContent,
  handleChangeIndex,
  headerHeight,
  headerRef,
  TabsContent,
}: TabsProps) {
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
                    idx === currentTabContent ? "3px solid" : "1px solid",
                  borderColor: (props) =>
                    idx === currentTabContent ? "text.darknavy" : "gray",
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
                    sx={{ fontWeight: idx === currentTabContent ? 600 : 400 }}
                  >
                    {tab.displayName}
                  </Box>
                </Button>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      <Box sx={{ height: `calc(var(--100vh) - ${headerHeight || 0}px)` }}>
        <AnimatePresence>{TabsContent[currentTabContent]}</AnimatePresence>
      </Box>
    </Flex>
  );
}

export { DynamicHeightTabs };
