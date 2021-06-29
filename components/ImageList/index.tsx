import * as React from "react";
import { Header } from "./Header";
import { CardList } from "./CardList";

import "./styles.css";

export default function ImageList({ ...props }) {
  return (
    <div className="container">
      <Header />
      <CardList id={props.id || "3"} />
    </div>
  );
}
