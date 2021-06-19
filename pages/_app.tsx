import { Auth } from "@supabase/ui";
import { supabase } from "../utils/initSupabase";
import CustomHead from "../components/CustomHead";
import { ThemeProvider } from "../components/ThemeProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <CustomHead {...pageProps} />
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </ThemeProvider>
  );
}

export default AppContainer;
