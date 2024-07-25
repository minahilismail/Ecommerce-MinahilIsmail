import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";
import { REVIEWS, SETTINGS } from "../../constants/review";

const ReviewCarousel: React.FC = () => {
  return (
    <div className="xxl:ml-[61px] xxl:mr-[60.63px] mx-[22px]">
    <Slider
      {...SETTINGS}
      className="flex gap-[10px] items-center"
    >
      {REVIEWS.map((review, index) => (
        <div
          key={index}
          className="border border-reviewBorder rounded-[20px] md:py-[16.83px] md:pl-[16.83px] md:pr-[20.56px] py-[27.4px] px-[19.5px] md:mb-[47.9px] mb-[24px]"
        >
          <div className="flex md:flex-row flex-col md:gap-[37.39px] gap-[26.17px] items-center">
            <img
              className="border-[1.87px] border-dashed border-primary rounded-full p-1"
              width={"86.93px"}
              height={"86.93"}
              src={review.image}
              alt={`${review.fullName}'s profile`}
            />
            <h3 className="text-navColor text-[15.98px] font-medium">
              {review.fullName}
            </h3>
          </div>
          <div className="text-wrap bg-quality mt-[26.17px] text-ellipsis md:py-[11.3px] py-[18.5px] px-[20px] md:px-[26.64px] rounded-[18.7px]">
            {review.review}
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ReviewCarousel;
