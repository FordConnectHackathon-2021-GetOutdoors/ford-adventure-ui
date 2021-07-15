import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export const ContinueButton = ({
  href,
  adventure,
  children,
  outline,
  ...props
}: any) => (
  <Link href={href} passHref>
    <Button
      as="a"
      bg="transparent"
      p="5"
      aria-label={adventure ? `Visit ${adventure!.displayName}` : children}
      bottom="0"
      zIndex="4"
      w="100%"
      {...props}
    >
      <Box
        bg={outline ? "white" : "bg.darknavy"}
        color={outline ? "bg.darknavy" : "white"}
        fontFamily="FontAntenna"
        px="4"
        py="4"
        w="20rem"
        borderRadius="md"
        borderColor="bg.darknavy"
        borderWidth="1px"
        borderStyle="solid"
        textAlign="center"
        // variant={outline ? "ouline" : ""}
      >
        {children}
      </Box>
    </Button>
  </Link>
);
