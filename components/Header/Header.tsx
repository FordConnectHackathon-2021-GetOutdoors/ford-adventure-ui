import { Box, Flex } from "@chakra-ui/react";
import Menu from "components/Menu/Menu";
import React from "react";

type HeaderProps = {
  variant?: string;
  showMenu?: boolean;
  skipSidePad?: boolean;
};

export function Header({
  variant,
  showMenu = true,
  skipSidePad = false,
}: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      position="relative"
      zIndex="2"
      marginLeft={skipSidePad ? "-10" : "0"}
      px="10"
      py="6"
      justify="space-between"
      color={variant === "overlay" ? "white" : "inherit"}
    >
      <Box>LOGO</Box>
      {showMenu && <Menu />}
    </Flex>
  );
}
