import { AuthProvider } from "utils/AuthContext";
import { DeviceProvider } from "utils/DeviceContext";
import { NotificationProvider } from "utils/NotificationContext";
import { ThemeProvider } from "components/ThemeProvider";
import { ThemeSwitcher } from "components/ThemeSwitcher";
import CustomHead from "components/CustomHead";
import type { AppProps } from "next/app";

// TODO - Prune the list of imported fonts
import "../public/fonts/antenna/atenna-font.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <DeviceProvider>
      <ThemeProvider cookies={pageProps.cookies}>
        <AuthProvider>
          {/* <ThemeSwitcher /> */}
          <CustomHead {...pageProps} />
          <Component {...pageProps} />
          <NotificationProvider {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default AppContainer;
