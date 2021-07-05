import { mode, Styles } from "@chakra-ui/theme-tools";
import { globalFontSmoothing } from "./typography";

const globalStyles = (props: Styles) => ({
  // "html, body": {
  //   fontSize: "100%",
  //   WebkitTextSizeAdjust: "100%",
  // },
  // body: {
  //   ...globalFontSmoothing,
  //   color: mode("gray.800", "whiteAlpha.900")(props),
  //   bg: mode("bg.white", "bg.dark")(props),
  //   overflow: "hidden",
  //   h: "var(--100vh)",
  // },
  // "*": {
  //   WebkitTapHighlightColor: "transparent",
  // },
});

export default globalStyles;
