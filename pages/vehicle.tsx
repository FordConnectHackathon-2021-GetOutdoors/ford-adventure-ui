import { supabase } from "utils/supabase";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import useFordUser from "utils/useFordUser";

export default function Profile({ user }: any) {
  const { mutateUser, user: fordUser } = useFordUser();
  console.log("🚀 ~ file: vehicle.tsx ~ line 9 ~ Profile ~ fordUser", fordUser);

  return (
    <Box>
      <h2>Vehicle Status</h2>
      {/* <Text strong>{user.email}</Text>
      <Text>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Text>
      <Button block onClick={() => supabase.auth.signOut()}>
        Sign out
      </Button> */}
    </Box>
  );
}

// export async function getServerSideProps({ req }: any) {
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   if (!user) {
//     // If no user, redirect to index.
//     return { props: {}, redirect: { destination: "/", permanent: false } };
//   }

//   // If there is a user, return it.
//   return { props: { user } };
// }
