// https://chakra-ui.com/docs/theming/customize-theme#customizing-component-styles

export const globalFontSmoothing = {
  fontVariantLigatures: "none",
  WebkitFontVariantLigatures: "none",
  textRendering: "optimizeLegibility",
  MozOsxFontSmoothing: "grayscale",
  fontSmoothing: "antialiased",
  WebkitFontSmoothing: "antialiased",
  textShadow: "rgba(0, 0, 0, .01) 0 0 1px",
};

export const Heading = {
  baseStyle: {
    fontFamily: "FontAntennaCond",
    textTransform: "uppercase",
    fontWeight: 300,
  },
  variants: {
    nameplate: {
      fontWeight: 500,
      fontSize: "4.0625rem",
    },
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
