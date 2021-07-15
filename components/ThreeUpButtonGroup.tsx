import {
  ComponentWithAs,
  FormControl as ChakraFormControl,
  IconProps,
  HStack,
  Icon,
  Input,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { item } from "utils/animations";

export interface RadioButtonProps {
  id: string;
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ComponentWithAs<"svg", IconProps>;
  as?: any;
}

export function RadioButton({ as, size, id, icon }: RadioButtonProps) {
  return (
    <ChakraFormControl
      as={as}
      id={id}
      display="flex"
      alignItems="center"
      justifyContent="center"
      top={size === "lg" ? 2 : 0}
      pos="relative"
    >
      <InputLeftElement
        pointerEvents="none"
        h="100%"
        w="100%"
        mx="auto"
        justifyContent="center"
      >
        <Icon
          as={icon}
          w={size === "lg" ? 16 : 10}
          h={size === "lg" ? 16 : 10}
          margin="0 auto"
        />
      </InputLeftElement>
      <Input
        variant="search"
        alignSelf="center"
        type="checkbox"
        lineHeight="none"
        height={size === "lg" ? "32" : "20"}
        width={size === "lg" ? "32" : "20"}
      />
    </ChakraFormControl>
  );
}

export function ThreeUpButtonGroup(props: any) {
  const iconColor = useColorModeValue(
    "text.placeholder",
    "text.darkPlaceholder"
  );
  return (
    <HStack spacing={4} alignItems="baseline" mt="-2">
      {props.children}
    </HStack>
  );
}
