import { Auth } from "@supabase/ui";
import { Box, Button, Flex } from "@chakra-ui/react";
import { ThreeUpButtonGroup } from "components/ThreeUpButtonGroup";
import { Title } from "components/Title";
import CardRadio from "components/CardRadio";
import Fullscreen from "components/Fullscreen";

export default function Dashboard() {
  const { user } = Auth.useUser();
  return (
    <Fullscreen justifyContent="center" alignItems="center">
      <ThreeUpButtonGroup />
      <Box pb="10">
        <Title faded>Dashboard</Title>
      </Box>
      <Flex justifyContent="center" w="100%">
        <Button variant="tile">Buy</Button>
      </Flex>
      <Flex justifyContent="center" w="100%" py="10">
        <CardRadio />
      </Flex>
      {user && "Is Logged In"}
    </Fullscreen>
  );
}
