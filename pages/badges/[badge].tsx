import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";

export default function Badge() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title faded>Badge</Title>
    </Fullscreen>
  );
}
