import type { AppProps } from "next/app";
import { AuthProvider } from "utils/AuthContext";

import { DeviceProvider } from "utils/DeviceContext";
import { NotificationProvider } from "utils/NotificationContext";
import { ThemeProvider } from "components/ThemeProvider";
// import { ThemeSwitcher } from "components/ThemeSwitcher";
import CustomHead from "components/CustomHead";
import { ToastContainer, toast, Flip } from "react-toastify";
import { ImageProvider } from "utils/ImageContext";
import { QueryClient, QueryClientProvider } from "react-query";

// TODO - Prune the list of imported fonts
import "../public/fonts/antenna/atenna-font.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import React, { Component } from "react";
import { SWRConfig } from "swr";
import fetcher from "utils/fetcher";

// React Query
const queryClient = new QueryClient();

// SWR

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <DeviceProvider>
      <ThemeProvider cookies={pageProps.cookies}>
        <NotificationProvider {...pageProps}>
          <AuthProvider>
            {/* <ThemeSwitcher /> */}
            <QueryClientProvider client={queryClient}>
              <ImageProvider>
                <SWRConfig
                  value={{
                    refreshInterval: 5000,
                    fetcher,
                  }}
                >
                  <CustomHead {...pageProps} />
                  <Component {...pageProps} />
                  <ToastContainer
                    position={toast.POSITION.BOTTOM_CENTER}
                    transition={Flip}
                    autoClose={8000}
                    draggablePercent={50}
                    hideProgressBar={true}
                  />
                </SWRConfig>
              </ImageProvider>
            </QueryClientProvider>
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default AppContainer;
