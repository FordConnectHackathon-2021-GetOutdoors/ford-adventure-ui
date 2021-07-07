import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";
const navy = "#102B4E";
const darknavy = "#102B4E";

const bg = {
  navy,
  darknavy,
  light: "#f4f4f4",
  dark: "#112b4f",
  white: "#fff",
  black: "#333",
  overlay: "rgba(0,0,0,.0125)",
  lightOverlay: "rgba(255,255,255,.15)",
  darkOverlay: "rgba(0,0,0,.1)",
  fbBlue: "#5C6FA0",
  gBlue: "#629BF0",
};

const text = {
  navy,
  darknavy,
  black: "#333333",
  white: "#FFFFFF",
  error: "#D92E14",
  grey: "#4D4D4D",
  darkgrey: "#797979",
  placeholder: "#BABABA",
  darkPlaceholder: "#2c6fce",
  link: "#63A7FF",
};

const colors = {
  bg,
  text,
};

export default colors;
