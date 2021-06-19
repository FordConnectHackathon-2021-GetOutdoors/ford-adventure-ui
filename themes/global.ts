import { colorCSSVariables } from "./colors";
import { globalFontSmoothing } from "./typography";

const globalStyles = {
  ":root": {
    ...colorCSSVariables,
  },
  "html, body": {
    fontSize: "100%",
    WebkitTextSizeAdjust: "100%",
    ...globalFontSmoothing,
  },
};

export default globalStyles;
