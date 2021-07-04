import React from "react";
import { Button, Icon } from "@chakra-ui/react";

export function CommentButton({ ...props }) {
  return (
    <Button {...props}>
      <Icon
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 24 23"
        aria-label="Comment"
      >
        <path
          stroke="#102B4E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 17.26h-5.652v3.566a1 1 0 01-1.651.759l-5.045-4.324H3a2 2 0 01-2-2V3a2 2 0 012-2h18a2 2 0 012 2v12.26a2 2 0 01-2 2z"
        />
      </Icon>
    </Button>
  );
}
