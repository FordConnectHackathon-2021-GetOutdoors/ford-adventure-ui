import { Header } from "components/Header/Header";
import Fullscreen from "components/Fullscreen";
import React from "react";
import {
  Carousel,
  defaultFilters,
  items,
} from "../../components/Carousel/Carousel";

export default function Adventures() {
  return (
    <Fullscreen>
      <Header variant="overlay" />
      <Carousel items={items} filters={defaultFilters} />
    </Fullscreen>
  );
}
