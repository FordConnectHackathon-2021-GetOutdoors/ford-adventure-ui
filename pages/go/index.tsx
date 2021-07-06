import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Carousel } from "components/Carousel/Carousel";
import { Header } from "components/Header/Header";
import Link from "next/link";
import { useState, useEffect } from "react";

type Filter = { key: string; displayName: string };
const filters: Filter[] = [
  { key: "beach", displayName: "Beach" },
  { key: "mountains", displayName: "Mountains" },
  { key: "desert", displayName: "Desert" },
  { key: "wellness", displayName: "Wellness" },
  { key: "city", displayName: "City" },
];

export default function Adventures() {
  const router = useRouter();
  const {
    query: { type: queryType },
  } = router;

  const [currentFilter, setFilter] = useState("beach");
  useEffect(
    () => {
      !queryType && router.push({ query: { type: "beach" } });
      queryType && queryType !== currentFilter && setFilter(`${queryType}`);
    },
    // eslint-disable-next-line
    [queryType]
  );

  return (
    <>
      <Header variant="overlay" />
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
              <Link key={filter.key} href={`/go?type=${filter.key}`} passHref>
                <Button
                  as="a"
                  variant="pill"
                  // @ts-ignore
                  isSelected={currentFilter === filter.key}
                >
                  {filter.displayName}
                </Button>
              </Link>
            );
          })}
        </HStack>
      </HStack>
      <Carousel filterBy={currentFilter} />
    </>
  );
}
