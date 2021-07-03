import CustomHead from "components/CustomHead";
import { ThemeProvider } from "components/ThemeProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// TODO - Prune the list of imported fonts
import "../public/fonts/antenna/atenna-font.css";
import React from "react";
import { AuthProvider } from "utils/AuthContext";
import { DeviceProvider } from "utils/DeviceContext";
import { NotificationProvider } from "utils/NotificationContext";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <DeviceProvider>
      <ThemeProvider cookies={pageProps.cookies}>
        <AuthProvider>
          <CustomHead {...pageProps} />
          <Component {...pageProps} />
          <NotificationProvider {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default AppContainer;
