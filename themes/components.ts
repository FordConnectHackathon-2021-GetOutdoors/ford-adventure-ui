// Background:
// https://chakra-ui.com/docs/theming/customize-theme#customizing-component-styles
// Example
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/input.ts

export const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    alignItems: "center",
    gap: 6,
    fontSize: "300px",
  },
  // Two variants: rounded and smooth
  variants: {},
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
};
