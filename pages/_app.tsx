import { Auth } from "@supabase/ui";
import CustomHead from "components/CustomHead";
import { ThemeProvider } from "components/ThemeProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// TODO - Prune the list of imported fonts
import "../public/fonts/antenna/atenna-font.css";
import { supabase } from "utils/supabase";

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
