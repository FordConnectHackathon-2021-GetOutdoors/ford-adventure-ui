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
    fontSize: "md",
    letterSpacing: "wider",
    bg: mode(
      props.isSelected ? "bg.darknavy" : "bg.white",
      //TODO
      props.isSelected ? "bg.darknavy" : "bg.white"
    )(props),
    color: mode(
      props.isSelected ? "white" : "text.darknavy",
      props.isSelected ? "white" : "text.darknavy"
    )(props),
    borderRadius: "full",
    px: 8,
    py: 3,
    transition: "all .2s ease-out",
  };
}

function DashboardTabsButtonVariant(props: Record<string, any>) {
  return {
    fontFamily: "FontAntenna",
    fontSize: "xs",
    color: "text.darknavy",
    letterSpacing: "wider",
    transition: "all .2s ease-out",
    borderRadius: "none",
    lineHeight: 1,
    borderBottom: props.isSelected ? "none" : "2px solid gray",
    py: 3,
    m: 0,
    border: 0,
  };
}

const defaultProps = {
  variant: null,
  size: null,
  colorScheme: null,
};

export const Button = {
  baseStyle: DefaultInput,
  variants: {
    tile: TileButtonVariant,
    pill: PillButtonVariant,
    dashboardTabs: DashboardTabsButtonVariant,
  },
  defaultProps,
};
