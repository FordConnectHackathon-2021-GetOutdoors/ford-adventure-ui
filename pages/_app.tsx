import CustomHead from "components/CustomHead";
import { ThemeProvider } from "components/ThemeProvider";
// import { ThemeSwitcher } from "components/ThemeSwitcher";

import type { AppProps } from "next/app";
// import { supabase } from "utils/supabase";

import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

// TODO - Prune the list of imported fonts
import "../public/fonts/antenna/atenna-font.css";
import React from "react";
import { AuthProvider } from "utils/AuthContext";
import { DeviceProvider } from "utils/DeviceContext";
import { NotificationProvider } from "utils/NotificationContext";

import "keen-slider/keen-slider.min.css";

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
