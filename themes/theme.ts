import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import globalStyles from "./global";
import fonts from "./fonts";
import colors from "./colors";
import { Heading, Text } from "./typography";
// import { Card } from "./surfaces";
import { Input } from "./controls";

const config: ThemeConfig = {
  cssVarPrefix: "ford",
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme: Record<string, any> = extendTheme({
  config,
  fonts,
  styles: { global: (props: any) => globalStyles(props) },
  colors,
  components: {
    // Card,
    Heading,
    Input,
    Text,
  },
});

export default theme;
