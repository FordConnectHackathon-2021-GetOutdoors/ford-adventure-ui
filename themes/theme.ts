import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import global from "./global";
import fonts from "./fonts";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts,
  styles: { global },
  colors: {
    brand: {
      light: "var(--color-1)",
      dark: "var(--color-5)",
    },
  },
});

export default theme;
