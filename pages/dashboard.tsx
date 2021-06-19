import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";

export default function Dashboard() {
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <Title faded>Dashboard</Title>
    </Fullscreen>
  );
}
