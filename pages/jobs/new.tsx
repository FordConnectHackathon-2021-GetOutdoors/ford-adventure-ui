import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";

export default function New() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title placeholder>New Job</Title>
    </Fullscreen>
  );
}
