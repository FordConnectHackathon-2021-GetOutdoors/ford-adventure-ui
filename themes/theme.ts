import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import global from "./global";
import fonts from "./fonts";
import { Heading, Text } from "./typography";
// import { Card } from "./surfaces";
import { Input } from "./controls";

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
  components: {
    // Card,
    Heading,
    Input,
    Text,
  },
});

export default theme;
