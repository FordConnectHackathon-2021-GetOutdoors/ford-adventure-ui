import { Flex } from "@chakra-ui/react";
import { Logo } from "components/Logo/Logo";
import Menu from "components/Menu/Menu";
import { MotionBox } from "components/motion";
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
    <MotionBox
      as={Flex}
      w="100%"
      position="relative"
      zIndex="2"
      marginLeft={skipSidePad ? "-10" : "0"}
      px="10"
      py="6"
      justify="space-between"
      color={variant === "overlay" ? "white" : "inherit"}
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        type: "spring",
        y: "0%",
        transition: {
          // delay: 2.5,
          ease: [0.23, 1, 0.32, 1],
          duration: 0.7,
        },
      }}
    >
      <Logo />
      {showMenu && <Menu />}
    </MotionBox>
  );
}
