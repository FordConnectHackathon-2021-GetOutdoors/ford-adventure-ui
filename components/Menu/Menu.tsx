import React, { useContext, useRef, useState } from "react";
import {
  Badge,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { destroyCookie } from "nookies";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DeviceContext } from "utils/DeviceContext";
import { AuthContext } from "utils/AuthContext";
import { Logo } from "components/Logo/Logo";
import useFordUser from "utils/useFordUser";
import { getCode } from "utils/endpoints";
import Link from "next/link";
import Adventure from "pages/go/[adventure]";
import Profile from "pages/profile";
import New from "pages/sandbox/new";
import Vehicle from "pages/sandbox/vehicle";

export default function Menu() {
  const { isDesktopOrLaptop } = useContext(DeviceContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { signOut } = useContext(AuthContext);
  const [menuItems] = useState([
    {
      text: "New Adventure",
      to: "/go",
    },
    {
      text: "My Adventures",
      to: "/",
    },
    {
      text: "Vehicle Status",
      to: "/vehicle",
    },
    {
      id: "connect",
      text: "Connect Vehicle",
      to: "/connect",
    },
    {
      text: "Profile",
      to: "/#",
    },
    {
      text: "Settings",
      to: "/#",
    },
    {
      text: "Sign Out",
      to: "/",
    },
  ]);
  const [lastIndex] = useState(menuItems.length - 1);

  const { isFordLoggedIn } = useFordUser();
  const handleVehicleDisconnect = () => {
    destroyCookie(null, "fordToken");
  };

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
              {menuItems.map(({ text, to, id }, index) => (
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
                    href={id === "connect" && !isFordLoggedIn ? getCode : to}
                    passHref
                  >
                    <Box
                      as="a"
                      onClick={
                        id === "connect" && !isFordLoggedIn
                          ? () => handleVehicleDisconnect()
                          : () => index === lastIndex && signOut()
                      }
                      fontFamily="FontAntenna"
                    >
                      {id === "connect" && isFordLoggedIn
                        ? "Disconnect Vehicle"
                        : text}
                    </Box>
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
