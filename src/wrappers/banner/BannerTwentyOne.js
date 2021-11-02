import React from "react";
import bannerData from "../../data/banner/banner-twenty-one.json";
import BannerTwentyOneSingle from "../../components/banner/BannerTwentyOneSingle.js";

const BannerTwentyOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerTwentyOneSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-30"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BannerTwentyOne;
