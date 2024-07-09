import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";
import { REVIEWS, SETTINGS } from "../../constants/review/review";

const ReviewCarousel: React.FC = () => {
  return (
    <Slider
      {...SETTINGS}
      className="flex gap-[26.17px] items-center justify-center mb-[24px] mx-6 lg:mx-[61px]"
    >
      {REVIEWS.map((review, index) => (
        <div
          key={index}
          className="border border-reviewBorder rounded-[20px] p-[16.83px]"
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
          <div className="text-wrap bg-quality text-ellipsis p-4 mt-[26.17px]">
            {review.review}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewCarousel;
