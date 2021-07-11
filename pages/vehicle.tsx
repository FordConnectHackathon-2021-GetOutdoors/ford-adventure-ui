import { supabase } from "utils/supabase";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile({ user }: any) {
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
