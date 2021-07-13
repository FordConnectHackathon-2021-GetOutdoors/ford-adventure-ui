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
  Stack,
  StackDivider,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { destroyCookie } from "nookies";
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
      text: "My Adventures",
      to: "/",
    },
    {
      id: "vehicle",
      text: "Vehicle Status",
      to: "/vehicle",
    },
    {
      id: "connect",
      text: "Connect Vehicle",
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

  const { isFordLoggedIn, mutateFordUser } = useFordUser();
  const handleVehicleDisconnect = () => {
    if (confirm("Are you sure you'd like to disconnect your vehicle?")) {
      destroyCookie(null, "fordToken");
      destroyCookie(null, "vehicleId");
      mutateFordUser();
      onClose();
    }
  };

  const toast = useToast();

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
                <Link
                  href={id === "connect" && !isFordLoggedIn ? getCode : to}
                  passHref
                  key={index}
                >
                  <Box
                    as="a"
                    // @ts-ignore
                    onClick={
                      id === "connect" && isFordLoggedIn
                        ? () => handleVehicleDisconnect()
                        : index === lastIndex
                        ? () => signOut()
                        : id === "vehicle" && !isFordLoggedIn
                        ? (e: any) => {
                            e.preventDefault();
                            toast({
                              title: "Connect Vehicle to view status",
                              status: "info",
                            });
                          }
                        : null
                    }
                    fontFamily="FontAntenna"
                  >
                    <Box
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
                      {id === "connect" && isFordLoggedIn
                        ? "Disconnect Vehicle"
                        : text}
                    </Box>
                  </Box>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
