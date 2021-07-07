// https://chakra-ui.com/docs/theming/customize-theme#customizing-component-styles

import { color } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const globalFontSmoothing = {
  fontVariantLigatures: "none",
  WebkitFontVariantLigatures: "none",
  textRendering: "optimizeLegibility",
  MozOsxFontSmoothing: "grayscale",
  fontSmoothing: "antialiased",
  WebkitFontSmoothing: "antialiased",
  textShadow: "rgba(0, 0, 0, .01) 0 0 1px",
};

function SummaryTitle(props: Record<string, any>) {
  const { theme } = props;
  // const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    fontFamily: "FontAntennaCond",
    fontSize: ["10vh", "12vh", "16vh", , "20vh"],
    lineHeight: ".8",
    fontWeight: 600,
    color: mode("text.white", "text.white")(props),
    pt: 2,
  };
}

function SummaryTagline(props: Record<string, any>) {
  const { theme } = props;
  return {
    fontSize: ["4vh", "5vh"],
    lineHeight: "1",
    fontWeight: "500",
    letterSpacing: "wide",
    pt: 2,
    color: mode("text.white", "text.white")(props),
  };
}

export const Heading = {
  baseStyle: {
    fontFamily: "FontAntennaCond",
    textTransform: "uppercase",
    fontWeight: 300,
  },
  variants: {
    SummaryTitle,
    SummaryTagline,
  },
};

export const Text = {
  baseStyle: {
    fontFamily: "FontAntenna",
  },
  variants: {
    secondaryCTA: {
      fontFamily: "FontAntennaCond",
      fontSize: "lg",
      textTransform: "uppercase",
    },
    selectedCTA: {
      fontFamily: "FontAntennaCond",
      fontSize: "lg",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    cta: {
      fontSize: "lg",
      fontFamily: "FontAntennaCond",
      fontWeight: "light",
      textTransform: "uppercase",
    },
  },
};

export const textStyles = {
  h1: {
    fontWeight: 100,
    fontFamily: "FontAntennaCond",
    fontSize: "4.0625rem",
    lineHeight: "none",
    textTransform: "uppercase",
  },
  h2: {
    fontSize: "2.8125rem",
  },
  h3: {
    fontSize: "2xl",
  },
};

export const FormLabel = {
  baseStyle: {
    fontWeight: 400,
    fontFamily: "FontAntennaCond",
    textTransform: "uppercase",
    opacity: 0.3,
    letterSpacing: "wider",
    // fontSize: "lg",
  },
};
