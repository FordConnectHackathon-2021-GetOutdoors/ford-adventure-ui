import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";

export default function Adventure() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title faded>Adventure #1</Title>
    </Fullscreen>
  );
}
