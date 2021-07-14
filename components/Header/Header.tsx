import { Flex } from "@chakra-ui/react";
import { Logo } from "components/Logo/Logo";
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
  ...props
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
      <Logo />
      {showMenu && <Menu />}
    </Flex>
  );
}
