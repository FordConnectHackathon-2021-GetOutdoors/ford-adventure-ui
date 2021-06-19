import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";

export default function Photos() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title placeholder>Photos</Title>
    </Fullscreen>
  );
}
