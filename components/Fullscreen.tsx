import { Box } from "@chakra-ui/react";

export default function Fullscreen({ ...props }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      h="var(--100vh)"
      overflow="scroll"
      {...props}
    />
  );
}
