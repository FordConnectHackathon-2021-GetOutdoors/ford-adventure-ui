import React from "react";
import { Button, Icon } from "@chakra-ui/react";

export function LikeButton({ ...props }) {
  return (
    <Button {...props}>
      <Icon
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 26 26"
        aria-label="Comment"
      >
        <path
          stroke="#102B4E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.44 13.8H3a2 2 0 00-2 2V23a2 2 0 002 2h3.44m0-11.2L9.198 2.77A2.336 2.336 0 0111.464 1v0A2.336 2.336 0 0113.8 3.336V9.32h9.28v0c1.06 0 1.92.86 1.92 1.92v.16a2.08 2.08 0 01-2.08 2.08h-.48.692a1.71 1.71 0 011.702 1.54v0a1.71 1.71 0 01-1.49 1.867L22.44 17l.211.018c.966.08 1.709.887 1.709 1.857v0c0 .94-.7 1.733-1.633 1.85l-.927.115.31.044a2.068 2.068 0 011.768 2.22v0A2.068 2.068 0 0121.817 25H6.44m0-11.2V25"
        />
      </Icon>
    </Button>
  );
}
