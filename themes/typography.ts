// https://chakra-ui.com/docs/theming/customize-theme#customizing-component-styles

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
    H1: {
      fontWeight: 200,
      fontSize: "4.0625rem",
    },
    H2: {
      fontSize: "2.8125rem",
    },
    H3: {
      fontSize: "2xl",
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
