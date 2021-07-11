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
import { HamburgerIcon } from "@chakra-ui/icons";
import { DeviceContext } from "utils/DeviceContext";
import { AuthContext } from "utils/AuthContext";
import { Logo } from "components/Logo/Logo";
import useFordUser from "utils/useFordUser";
import { getCode } from "utils/endpoints";
import Link from "next/link";

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
      id: "vehicle",
      text: "My Vehicle",
      to: "/vehicle",
    },
    {
      text: "Leaderboard",
      to: "/?tab=Leaderboard",
    },
    {
      text: "Photos",
      to: "/",
    },

    // {
    //   text: "Profile",
    //   to: "/profile",
    // },
    {
      text: "Sign Out",
      to: "/",
    },
  ]);
  const [lastIndex] = useState(menuItems.length - 1);

  const { isFordLoggedIn } = useFordUser();

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
                  bg={id === "vehicle" && !isFordLoggedIn ? "gray.100" : ""}
                  style={
                    index === lastIndex
                      ? { backgroundColor: "#102B4E", color: "#FFF" }
                      : {}
                  }
                >
                  <Link
                    href={id === "vehicle" && !isFordLoggedIn ? getCode : to}
                    passHref
                  >
                    <Box
                      as="a"
                      onClick={() => index === lastIndex && signOut()}
                      fontFamily="FontAntenna"
                    >
                      {text}
                      {id === "vehicle" ? (
                        !isFordLoggedIn ? (
                          <Badge
                            colorScheme="red"
                            ml={4}
                            variant="outline"
                            px="2"
                            borderRadius="lg"
                          >
                            Click to Connect
                          </Badge>
                        ) : (
                          <Badge
                            colorScheme="green"
                            ml={4}
                            variant="outline"
                            px="2"
                            borderRadius="lg"
                          >
                            Connected
                          </Badge>
                        )
                      ) : null}
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
