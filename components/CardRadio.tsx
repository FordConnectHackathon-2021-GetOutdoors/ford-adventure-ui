import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard({ ...props }) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        p="40px"
        cursor="pointer"
        borderRadius="none"
        boxShadow="lightInputFocusShadow"
        fontFamily="FontAntennaCond"
        fontWeight="600"
        textTransform="uppercase"
        borderWidth="2px"
        _checked={{
          bg: "white",
          color: "text.navy",
          borderColor: "text.navy",
        }}
        _hover={{
          bg: "white",
          color: "text.navy",
          borderColor: "text.placeholder",
          boxShadow: "outline",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export default function CardRadio({ options = ["beach", "mountain", "lake"] }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "destination",
    defaultValue: "lake",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack py={10} spacing={10} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
