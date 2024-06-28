import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";
import { UserReview } from "../../types/types";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const reviews: UserReview[] = [
  {
    fullName: "Alice Johnson",
    image: user1,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos iste obcaecati deleniti alias assumenda architecto, est similique! Sed ducimus suscipit aut iste non quia atque, aperiam qui cumque. Dolore.",
  },

  {
    fullName: "Emma Davis",
    image: user2,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos iste obcaecati deleniti alias assumenda architecto, est similique! Sed ducimus suscipit aut iste non quia atque, aperiam qui cumque. Dolore.",
  },
  {
    fullName: "Frank Miller",
    image: user3,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos iste obcaecati deleniti alias assumenda architecto, est similique! Sed ducimus suscipit aut iste non quia atque, aperiam qui cumque. Dolore.",
  },
];
const ReviewCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="flex gap-[26.17px] items-center justify-center mb-[24px] mx-6 lg:mx-[61px]"
    >
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border border-[#BABABA] rounded-[20px] p-[16.83px]"
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
