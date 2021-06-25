import {
  ArrowRightIcon,
  QuestionIcon,
  SunIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
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

export interface RadioButtonProps {
  id: string;
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ComponentWithAs<"svg", IconProps>;
}

function RadioButton({ size, id, icon }: RadioButtonProps) {
  return (
    <ChakraFormControl
      id={id}
      display="flex"
      alignItems="center"
      justifyContent="center"
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
          w={size === "lg" ? 16 : 8}
          h={size === "lg" ? 16 : 8}
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
    <HStack spacing={4} py={6} mb={10}>
      <RadioButton id="one" icon={UnlockIcon} />
      <RadioButton id="two" size="lg" icon={SunIcon} />
      <RadioButton id="three" icon={QuestionIcon} />
    </HStack>
  );
}
