import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import SupabaseLogin from "components/SupabaseLogin";
import ImageList from "components/ImageList";

export default function Options({ ...props }) {
  return <ImageList id={props.id} />;
}

export async function getStaticProps({ params }: any) {
  return {
    props: { id: params.id },
  };
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
