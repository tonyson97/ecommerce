import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import sliderData from "../../data/hero-sliders/hero-slider-twenty.json";
import HeroSliderTwentySingle from "../../components/hero-slider/HeroSliderTwentySingle.js";

const HeroSliderTwenty = ({ spaceLeftClass, spaceRightClass }) => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };
  return (
    <div
      className={`slider-area ${spaceLeftClass ? spaceLeftClass : ""} ${
        spaceRightClass ? spaceRightClass : ""
      }`}
    >
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderTwentySingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

HeroSliderTwenty.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default HeroSliderTwenty;
