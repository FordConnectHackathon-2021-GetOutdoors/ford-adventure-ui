import {
  FormControl as ChakraFormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";

interface FormControl {
  id: string;
  label: string;
  helperText?: string;
}

export function FormControl(props: FormControl) {
  const { helperText, id, label } = props;
  return (
    <Stack spacing={4} pb={4}>
      <ChakraFormControl id={id}>
        {/* https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/form-label.ts */}
        <FormLabel pb={2} m={0}>
          {label}
          {/* https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/form-error.ts */}
        </FormLabel>
        <Input type="email" />
        {helperText && <FormHelperText px={5}>{helperText}</FormHelperText>}
      </ChakraFormControl>
    </Stack>
  );
}
