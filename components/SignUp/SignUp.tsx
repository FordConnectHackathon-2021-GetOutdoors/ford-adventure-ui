import { Auth, Typography, Button } from "@supabase/ui";
import { useAuth } from "utils/AuthContext";
import { supabase } from "utils/supabase";

const Container = (props: {
  supabaseClient: { auth: { signOut: () => void } };
  children: any;
}) => {
  const { user } = useAuth();
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
    <Container supabaseClient={supabase}>
      <Auth
        supabaseClient={supabase}
        providers={["twitter", "google", "facebook"]}
        // socialLayout="vertical"
        socialButtonSize="xlarge"
      />
    </Container>
  );
}
