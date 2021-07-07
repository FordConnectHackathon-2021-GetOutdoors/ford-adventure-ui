import { AuthProvider } from "utils/AuthContext";
import { DeviceProvider } from "utils/DeviceContext";
import { NotificationProvider } from "utils/NotificationContext";
import { ThemeProvider } from "components/ThemeProvider";
import { ThemeSwitcher } from "components/ThemeSwitcher";
import CustomHead from "components/CustomHead";
import type { AppProps } from "next/app";
import { ToastContainer, toast, Flip } from 'react-toastify';

// TODO - Prune the list of imported fonts
import "../public/fonts/antenna/atenna-font.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <DeviceProvider>
      <ThemeProvider cookies={pageProps.cookies}>
        <AuthProvider>
          {/* <ThemeSwitcher /> */}
          <CustomHead {...pageProps} />
          <Component {...pageProps} />
          <ToastContainer
            position={toast.POSITION.BOTTOM_CENTER}
            transition={Flip}
            autoClose={8000}
            draggablePercent={50}
            hideProgressBar={true}
          / >
          <NotificationProvider {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </DeviceProvider>
  );
}

export default AppContainer;
