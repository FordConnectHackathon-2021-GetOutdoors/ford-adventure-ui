import React from "react";
import { Button } from "@chakra-ui/react";

export function SliderButton({ children, onClick, ...props }) {
  return (
    <Button
      {...props}
      onClick={onClick}
      position="absolute"
      userSelect="none"
      borderRadius="full"
      _focusVisible={{ bg: "text.darknavy" }}
      _active={{ bg: "text.darknavy" }}
      _focus={{ bg: "text.darknavy" }}
      _hover={{ bg: "text.darknavy" }}
      _activeLink={{ bg: "text.darknavy" }}
      _pressed={{ bg: "text.darknavy" }}
    >
      {children}
    </Button>
  );
}
