import { Box, Container } from "@chakra-ui/react";
import { Settings } from "components/Settings";
import { ThemeSwitcher } from "components/ThemeSwitcher";
import { useAuth } from "utils/AuthContext";
import Login from "components/Login/Login";
import Fullscreen from "components/Fullscreen";
import useSWR from "swr";
import SupabaseLogin from "components/SocialLogin";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

function Home() {
  const { user, session } = useAuth();

  const { data, error } = useSWR(
    session ? ["/api/getUser", session.access_token] : null,
    fetcher
  );

  return (
    <Fullscreen>
      <Container w="400px" centerContent my={24}>
        {!user ? <SupabaseLogin /> : <Settings />}
        {/* {!user ? <Login /> : <Settings />} */}
        <ThemeSwitcher />
        {user && data && (
          <Box>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Box>
        )}
      </Container>
    </Fullscreen>
  );
}

export default Home;
