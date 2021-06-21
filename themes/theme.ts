import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import globalStyles from "./global";
import fonts from "./fonts";
import colors from "./colors";
import shadows from "./shadows";
import { Heading, Text, textStyles, FormLabel } from "./typography";
// import { Card } from "./components";
import { Input } from "./controls";
import { Button } from "./button";

const config: ThemeConfig = {
  cssVarPrefix: "ford",
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme: Record<string, any> = extendTheme({
  colors,
  config,
  fonts,
  shadows,
  styles: { global: (props: any) => globalStyles(props) },
  textStyles,
  components: {
    // Card,
    Heading,
    // @ts-ignore
    Input,
    Text,
    FormLabel,
    // @ts-ignore
    Button,
  },
});

export default theme;
