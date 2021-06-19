import { Box } from "@chakra-ui/react";

export default function Fullscreen({ ...props }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      h="var(--100vh)"
      overflow="auto"
      {...props}
    />
  );
}
