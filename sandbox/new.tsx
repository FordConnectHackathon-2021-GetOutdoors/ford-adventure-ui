import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";

export default function New() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title faded>New Job</Title>
    </Fullscreen>
  );
}
