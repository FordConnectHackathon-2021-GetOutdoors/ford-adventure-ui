import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  variant?: string;
};

export function Header({ variant }: HeaderProps) {
  return (
    <Flex
      as="header"
      position="relative"
      zIndex={2}
      px="10"
      py="6"
      justify="space-between"
      color={variant === "overlay" ? "white" : "inherit"}
    >
      <Box>LOGO</Box>
      <Box>MENU</Box>
    </Flex>
  );
}
