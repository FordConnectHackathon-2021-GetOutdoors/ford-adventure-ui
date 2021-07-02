import { Header } from "../components/Carousel/Header";
import React from "react";
// import { Auth } from "@supabase/ui";
import Fullscreen from "../components/Fullscreen";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useKeenSlider } from "keen-slider/react";
import { Box, Button, Flex, Grid, HStack } from "@chakra-ui/react";
// import styles from "../components/dashboard.modules.scss";

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

  return (
    <Fullscreen
      // justifyContent="center"
      alignItems="flexT"
      bg="white"
      // w="100%"
      h="var(--100vh)"
    >
      <Header />
      <Flex overflow="auto" alignItems="stretch" px="10" pt="1">
        {dashboardTabs.map((tab: any, idx: number) => {
          return (
            <Flex
              key="idx"
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
                isSelected={idx === currentSlide}
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

      <div
        // @ts-ignore
        ref={sliderRef}
        className="keen-slider"
        style={{ display: "flex", flexGrow: 1 }}
      >
        <div className="keen-slider__slide" style={{ background: "blue" }}>
          1
        </div>
        <div className="keen-slider__slide" style={{ background: "green" }}>
          2
        </div>
        <div className="keen-slider__slide" style={{ background: "red" }}>
          3
        </div>
      </div>
      <ThemeSwitcher />
    </Fullscreen>
  );
}
