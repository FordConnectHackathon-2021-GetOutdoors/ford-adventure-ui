import { useColorMode, Switch } from "@chakra-ui/react";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";
  return (
    <Switch
      isChecked={isLight}
      onChange={toggleColorMode}
      position="fixed"
      right="3"
      top="3"
    />
  );
};
