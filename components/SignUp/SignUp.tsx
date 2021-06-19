import { Auth, Typography, Button } from "@supabase/ui";
import { supabase } from "utils/supabase";

const Container = (props: {
  supabaseClient: { auth: { signOut: () => void } };
  children: any;
}) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function SignUp() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth
          supabaseClient={supabase}
          providers={["google", "facebook", "github"]}
          socialLayout="vertical"
          socialButtonSize="xlarge"
        />
      </Container>
    </Auth.UserContextProvider>
  );
}
