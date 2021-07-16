import React from "react";
import { VStack } from "@chakra-ui/react";
import { MotionBox } from "components/motion";

interface TabContentProps {
  headerHeight: number | undefined;
  children?: React.ReactNode;
}

export function TabContent({ headerHeight, children }: TabContentProps) {
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
