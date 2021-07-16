import { Button, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Carousel } from "components/Carousel/Carousel";
import { Header } from "components/Header/Header";
import Link from "next/link";
import { useEffect, useContext, useRef } from "react";
import nookies from "nookies";
import useFordUser from "utils/useFordUser";
import { NotificationContext } from "utils/NotificationContext";

type Filter = { key: string; displayName: string };
const filters: Filter[] = [
  { key: "beach", displayName: "Beach" },
  { key: "mountains", displayName: "Mountains" },
  { key: "desert", displayName: "Desert" },
  { key: "wellness", displayName: "Wellness" },
  { key: "city", displayName: "City" },
];

export async function getServerSideProps(context: any) {
  let cookies = nookies.get(context);
  return {
    props: {
      server: true,
      cookies,
    },
  };
}

export default function Adventures({ ...props }) {
  const router = useRouter();
  const {
    query: { type: queryType },
  } = router;

  const { showCustom } = useContext(NotificationContext);
  const hasShown = useRef(false);
  useEffect(
    () => {
      if (!hasShown.current) {
        showCustom({
          title: "MY FORD VEHICLE STATUS",
          message: "Your vehicle is ready to travel up to 548 miles today !",
          status: "SUCCESS",
          hasInternal: true,
          internalLink: "/vehicle",
        });
        hasShown.current = true;
      }
    },
    // eslint-disable-next-line
    [queryType]
  );
  const { data } = useFordUser();
  data?.isFordLoggedIn &&
    console.log("🚀 ~ file: index.tsx ~ line 47 ~ Adventures ~ data", data);

  return (
    <>
      <Header variant="overlay" />
      {filters.length ? (
        <>
          <HStack
            overflowX="scroll"
            pl={9}
            position="relative"
            zIndex="2"
            css={{ "::-webkit-scrollbar": { display: "none" } }}
          >
            <HStack pr="9">
              {filters.map((filter: Filter, i: number) => {
                return (
                  <Link
                    key={filter.key}
                    href={`/go?type=${filter.key}`}
                    passHref
                  >
                    <Button
                      as="a"
                      variant={
                        queryType === filter.key ? "pill" : "pillSelected"
                      }
                    >
                      {filter.displayName}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          </HStack>
          <Carousel filterBy={queryType} />
        </>
      ) : (
        <Carousel />
      )}
    </>
  );
}
