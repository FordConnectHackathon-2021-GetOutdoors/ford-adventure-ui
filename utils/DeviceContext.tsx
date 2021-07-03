// @ts-nocheck
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const DeviceContext = createContext({
  isBigScreen: false,
  isDesktopOrLaptop: false,
  isTabletOrMobile: false,
  isPortrait: false,
  isRetina: false,
});

export function DeviceProvider({ children }) {
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <DeviceContext.Provider
      value={{
        isBigScreen,
        isDesktopOrLaptop,
        isTabletOrMobile,
        isPortrait,
        isRetina,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
}
