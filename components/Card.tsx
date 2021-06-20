import { Box, Input, useStyleConfig } from "@chakra-ui/react";
import React from "react";

export function Card(props: any) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("SearchInput", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      <Input />
      {children}
    </Box>
  );
}
