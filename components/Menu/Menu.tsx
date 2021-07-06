import React, { useContext, useRef } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DeviceContext } from "utils/DeviceContext";
import { AuthContext } from "utils/AuthContext";

const MenuItem = ({ children = "", isLast = false, to = "/", ...rest }) => {
    const { signOut } = useContext(AuthContext);
    if (isLast) {
        return (
            <Button variant="link" onClick={signOut}>
                <Text display="block" {...rest}>
                    {children}
                </Text>
            </Button>
        );
    } 
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

export default function Menu() {
  const { isDesktopOrLaptop } = useContext(DeviceContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>
          <DrawerBody>
            <Stack
              spacing={8}
              align="center"
              justify={["flex-end", "flex-end", "flex-end", "flex-end"]}
              direction={["column", "column", "column", "column"]}
              pt={[4, 4, 0, 0]}
            >
              <MenuItem to="/">New Adventure</MenuItem>
              <MenuItem to="/">My Adventures</MenuItem>
              <MenuItem to="/">Vehicle Status</MenuItem>
              <MenuItem to="/">Profile</MenuItem>
              <MenuItem to="/">Settings</MenuItem>
              <MenuItem isLast={true}>Sign Out</MenuItem>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
