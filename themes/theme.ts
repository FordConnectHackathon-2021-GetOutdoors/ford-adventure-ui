import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import globalStyles from "./global";
import fonts from "./fonts";
import colors from "./colors";
import shadows from "./shadows";
import { Heading, Text, textStyles } from "./typography";
// import { Card } from "./components";
import { Input } from "./controls";

const config: ThemeConfig = {
  cssVarPrefix: "ford",
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme: Record<string, any> = extendTheme({
  colors,
  components: {
    // Card,
    Heading,
    Input,
    Text,
  },
  config,
  fonts,
  shadows,
  styles: { global: (props: any) => globalStyles(props) },
  textStyles,
});

export default theme;
