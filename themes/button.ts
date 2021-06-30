import { SmallAddIcon } from "@chakra-ui/icons";
import { AspectRatio, transition } from "@chakra-ui/react";
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
    bg: mode("bg.darknavy", "text.white")(props),
    borderRadius: "none",
    color: mode("text.white", "text.darknavy")(props),
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

function PillButtonVariant(props: Record<string, any>) {
  return {
    fontFamily: "FontAntennaCond",
    fontWeight: 600,
    fontSize: "xs",
    letterSpacing: "wider",
    bg: mode(
      props.isSelected ? "bg.darknavy" : "bg.white",
      //TODO
      props.isSelected ? "bg.darknavy" : "bg.white"
    )(props),

    color: mode(
      props.isSelected ? "text.white" : "text.darknavy",
      //TODO
      props.isSelected ? "text.darknavy" : "text.white"
    )(props),
    px: 8,
    py: 3,
    transition: "all .2s ease-out",
    // boxShadow: "buttonShadowDefault",
    _hover: {
      bg: mode(
        props.isSelected ? "bg.white" : "bg.darknavy",
        //TODO
        props.isSelected ? "bg.darknavy" : "bg.white"
      )(props),
      color: mode(
        props.isSelected ? "text.darknavy" : "text.white",
        //TODO
        props.isSelected ? "text.white" : "text.darknavy"
      )(props),
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
  variants: { tile: TileButtonVariant, pill: PillButtonVariant },
  defaultProps,
};
