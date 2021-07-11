import { parseCookies, setCookie } from "nookies";
// import { supabase } from "utils/supabase";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
// import useFordUser from "utils/useFordUser";

import fetcher from "utils/fetcher";

async function fetchVehicleData(token) {
  try {
    // await fetcher("/api/fordAuth", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ code }),
    // });

    // 1. Send post, with auth token
    // 2. send get for vehicle info
    return { hello: "world" };
  } catch (error) {}
}

function useVehicleData() {
  const { token } = parseCookies();
  return useSWR("vehicleStatus", () => fetchVehicleData(token));
}

export default function Profile() {
  const { data } = useVehicleData();
  data &&
    console.log("🚀 ~ file: vehicle.tsx ~ line 15 ~ Profile ~ data", data);

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
