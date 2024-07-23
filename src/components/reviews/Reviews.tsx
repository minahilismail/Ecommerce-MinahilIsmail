import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";
import { REVIEWS, SETTINGS } from "../../constants/review";

const ReviewCarousel: React.FC = () => {
  return (
    <div className="ml-[61px] mr-[60.63px]">
    <Slider
      {...SETTINGS}
      className="flex gap-[10px] items-center mb-[24px] mx-6 md:mx-0"
    >
      {REVIEWS.map((review, index) => (
        <div
          key={index}
          className="border border-reviewBorder rounded-[20px] py-[16.83px] pl-[16.83px] pr-[20.56px] mb-[47.9px]"
        >
          <div className="flex gap-[37.39px] items-center">
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
          <div className="text-wrap bg-quality mt-[26.17px] text-ellipsis py-[11.3px] px-[26.64px] rounded-[18.7px]">
            {review.review}
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ReviewCarousel;
