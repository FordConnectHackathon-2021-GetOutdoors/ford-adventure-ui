import { AspectRatio } from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props),
  };
}

const DefaultInput = {
  textTransform: "uppercase",
};

function TileButtonVariant(props: Record<string, any>) {
  return {
    fontFamily: "FontAntennaCond",
    fontWeight: 400,
    letterSpacing: "widest",
    bg: mode("bg.navy", "text.white")(props),
    borderRadius: "none",
    color: mode("text.white", "text.navy")(props),
    h: "6.5rem",
    w: "6.5rem",
    transition: "all .1s linear",
    boxShadow: "buttonShadowDefault",
    _hover: {
      h: "7rem",
      w: "7rem",
      boxShadow: "xl",
    },
  };
}

const defaultProps = {
  variant: null,
  size: null,
  colorScheme: null,
};

export const Button = {
  baseStyle: DefaultInput,
  variants: { tile: TileButtonVariant },
  defaultProps,
};
