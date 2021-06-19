import { Container, Box } from "@chakra-ui/react"
import Head from 'next/head'
import { appTitle } from "../next.config"
import Landing from "../components/Landing/Landing"

export default function Index() {
  return (
    <div>
      <Head>
        <title>{ appTitle }</title>
      </Head>
      <Container>
        <Box>
          <Landing />
        </Box>
      </Container>
    </div>
  )
}