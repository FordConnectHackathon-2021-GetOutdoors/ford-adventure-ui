import React from "react";
import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";
// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { Header } from "components/Header/Header";
import { useKeenSlider } from "keen-slider/react";

export default function Adventure() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <Fullscreen bg="white">
      <Header />
      <Title faded>Adventure #1</Title>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlide(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
      {/* @ts-ignore */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </Fullscreen>
  );
}

{
  /* <ThemeSwitcher /> */
}
