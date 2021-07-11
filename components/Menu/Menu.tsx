import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DeviceContext } from "utils/DeviceContext";
import { AuthContext } from "utils/AuthContext";
import { Logo } from "components/Logo/Logo";

export default function Menu() {
  const { isDesktopOrLaptop } = useContext(DeviceContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { signOut } = useContext(AuthContext);
  const [menuItems] = useState([
    {
      text: "New Adventure",
      to: "/",
    },
    {
      text: "My Adventures",
      to: "/",
    },
    {
      text: "Vehicle Status",
      to: "/",
    },
    {
      text: "Profile",
      to: "/",
    },
    {
      text: "Settings",
      to: "/",
    },
    {
      text: "Sign Out",
      to: "/",
    },
  ]);
  const [lastIndex] = useState(menuItems.length - 1);
  return (
    <>
      <IconButton
        aria-label="Open Menu"
        ref={btnRef.current}
        size={isDesktopOrLaptop ? "lg" : "xl"}
        icon={<HamburgerIcon w="8" h="8" />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="2em" />
          <DrawerHeader pb="0">
            <Logo />
          </DrawerHeader>
          <DrawerBody paddingStart="0" paddingEnd="0">
            <Divider />
            <Stack divider={<StackDivider />} spacing="0">
              {menuItems.map(({ text, to }, index) => (
                <Box
                  key={index}
                  pl="8"
                  pr="8"
                  pb="5"
                  pt="5"
                  style={
                    index === lastIndex
                      ? { backgroundColor: "#102B4E", color: "#FFF" }
                      : {}
                  }
                >
                  <Link
                    href={to}
                    onClick={() => index === lastIndex && signOut()}
                  >
                    <Text display="block">{text}</Text>
                  </Link>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
