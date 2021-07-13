import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export const ContinueButton = ({
  href,
  adventure,
  children,
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
        bg="bg.darknavy"
        color="white"
        fontFamily="FontAntenna"
        px="4"
        py="4"
        w="20rem"
        borderRadius="md"
        textAlign="center"
      >
        {children}
      </Box>
    </Button>
  </Link>
);
