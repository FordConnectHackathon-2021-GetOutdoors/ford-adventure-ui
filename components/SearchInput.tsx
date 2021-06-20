import { Search2Icon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export function SearchInput(props: any) {
  const iconColor = useColorModeValue(
    "text.placeholder",
    "text.darkPlaceholder"
  );
  return (
    <Stack spacing={4} py={6} mb={10}>
      <InputGroup display="flex" alignItems="center">
        <InputLeftElement pointerEvents="none" display="flex" h="100%" ml={3}>
          <Icon
            as={Search2Icon}
            color={iconColor}
            w={4}
            h={4}
            alignItems="center"
          />
        </InputLeftElement>
        <Input
          variant="search"
          placeholder="Search for something"
          pl={14}
          pr={14}
          alignSelf="center"
        />
      </InputGroup>
    </Stack>
  );
}
