import { Header } from "../components/Carousel/Header";
import React, { useEffect, useRef, useState } from "react";
import Fullscreen from "../components/Fullscreen";
import { useKeenSlider } from "keen-slider/react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { PhotoPost } from "../components/PhotoPost/PhotoPost";

import utah from "../public/images/utah.png";
import { addDomEvent } from "@chakra-ui/utils";

const dashboardTabs = [
  {
    id: "photos",
    displayName: "Photos",
  },
  {
    id: "leaderboard",
    displayName: "Leaderboard",
  },
  {
    id: "badges",
    displayName: "Badges",
  },
];

export default function Dashboard() {
  // const { user } = Auth.useUser();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeight] = useState(headerRef?.current?.clientHeight);
  useEffect(
    () =>
      addDomEvent(window, "resize", () =>
        setHeight(headerRef?.current?.clientHeight)
      ),
    []
  );
  useEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef?.current?.clientHeight);
    }
  }, [headerRef]);

  return (
    <Flex flexDir="column">
      <Flex flexShrink={1} flexDir="column" ref={headerRef}>
        <Header />
        <Flex overflow="auto" alignItems="stretch" px="8" pt="1">
          {dashboardTabs.map((tab: any, idx: number) => {
            return (
              <Flex
                key={idx}
                flexGrow={1}
                sx={{
                  borderBottom: (props) =>
                    idx === currentSlide ? "3px solid navy" : "1px solid gray",
                }}
                px={4}
              >
                <Button
                  flexGrow={1}
                  key={tab.id}
                  onClick={() => slider.moveToSlideRelative(idx)}
                  variant="dashboardTabs"
                >
                  <Box sx={{ opacity: 0, pointerEvents: "none" }}>
                    {tab.displayName}
                  </Box>
                  <Box
                    position="absolute"
                    sx={{ fontWeight: idx === currentSlide ? 600 : 400 }}
                  >
                    {tab.displayName}
                  </Box>
                </Button>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      <Flex flexShrink={0} flexGrow={1} flexDir="column">
        <Box
          // @ts-ignore
          ref={sliderRef}
          className="keen-slider"
        >
          <Box
            className="keen-slider__slide"
            position="relative"
            height={
              headerHeight
                ? `calc(var(--100vh) - ${headerHeight || 0}px)`
                : "100px"
            }
            px={8}
          >
            <PhotoPost imgSrc={utah} />
            <PhotoPost imgSrc={utah} />
            <PhotoPost imgSrc={utah} />
          </Box>
          <div className="keen-slider__slide" style={{ background: "blue" }}>
            2
          </div>
          <div className="keen-slider__slide" style={{ background: "red" }}>
            3
          </div>
          .
        </Box>
      </Flex>
    </Flex>
  );
}
