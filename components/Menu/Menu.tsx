import React, { useContext, useRef } from "react";
import {
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

const MenuItem = ({ children = "", isFirst = false, isLast = false, to = "/", ...rest }) => {
    const { signOut } = useContext(AuthContext);
    if (isFirst || isLast) {
        return (
          <>
            {
              isFirst && <Divider marginBottom="4"/>
            }
            <Link 
              href={to} pl={[8, 8, 8, 8]} 
              pr={[8, 8, 8, 8]}
              onClick={signOut} 
            >
                <Text display="block" {...rest}>
                    {children}
                </Text>
            </Link>
            {
              isLast && <Divider marginTop="4"/>
            }
          </>
        );
    } 
    return (
      <>
        <Link href={to} pl={[8, 8, 8, 8]} pr={[8, 8, 8, 8]}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
      </>
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
          <DrawerCloseButton mt={{ base: "2em", md: "2em", lg: "2em", xl: "2em" }} />
          <DrawerHeader pb={[0, 0, 0, 0]}><Logo /></DrawerHeader>
          <DrawerBody paddingStart="0" paddingEnd="0">
            <Stack
              spacing={4}
              align="left"
              justify={["flex-end", "flex-end", "flex-end", "flex-end"]}
              direction={["column", "column", "column", "column"]}
              pt="0"
              pl="0"
              pr="0"
              divider={<StackDivider />}
            >
              <MenuItem to="/" isFirst={true}>New Adventure</MenuItem>
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
