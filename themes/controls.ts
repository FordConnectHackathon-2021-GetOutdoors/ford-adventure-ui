import { getColor, mode } from "@chakra-ui/theme-tools";

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props),
  };
}

function SearchInputVariant(props: Record<string, any>) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      fontFamily: "FontAntenna",
      fontSize: "lg",
      color: mode("text.navy", "text.white")(props),
      border: "1px solid",
      borderColor: "transparent",
      bg: "bg.overlay",
      borderRadius: "full",
      height: "3.125rem",
      boxShadow: mode("lightSearchShadow", "darkSearchShadow")(props),
      _placeholder: {
        color: mode("text.placeholder", "text.darkPlaceholder")(props),
        textAlign: "center",
      },
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props),
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
      },
    },
    addon: {
      border: "1px solid red",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props),
    },
  };
}

export const Input = {
  variants: { search: SearchInputVariant },
};
