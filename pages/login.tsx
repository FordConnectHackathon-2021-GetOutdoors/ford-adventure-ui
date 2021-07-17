import { Box } from "@chakra-ui/react";
import React from "react";

import SignUp from "components/SignUp/SignUp";
import { supabase } from "utils/supabase";

const Login = () => (
  <Box p="4" w="100%" h="100%">
    <SignUp />
  </Box>
);

export default Login;

export async function getServerSideProps({ req }: any) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { props: { server: true } };
  }

  // If there is a user, return it.
  return { props: { user, server: true } };
}
