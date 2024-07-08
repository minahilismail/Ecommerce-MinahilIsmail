import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";
import { NEWS } from "../../types/types";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";

const newsList: NEWS[] = [
  {
    date: "22,oct,2021",
    image: news1,
    title: "Who avoids a pain that produces?",
    news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos iste obcaecati deleniti alias assumenda architecto, est similique! Sed ducimus suscipit aut iste non quia atque, aperiam qui cumque. Dolore.",
    company: "By spacing tech",
  },
  {
    date: "22,oct,2021",
    image: news2,
    title: "Who avoids a pain that produces?",
    news: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos iste obcaecati deleniti alias assumenda architecto, est similique! Sed ducimus suscipit aut iste non quia atque, aperiam qui cumque. Dolore.",
    company: "By spacing tech",
  },
];

const NewsComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between mx-6 lg:mx-[60px]">
        <div className="text-secondary text-[27.38px] font-semibold">
          Latest news
        </div>
        <div className="text-secondary font-medium">View all</div>
      </div>
      <Slider
        {...settings}
        className="flex gap-[26.17px] items-center justify-center mx-4 lg:mx-[60px] mt-[55.5px] mb-[101px]"
      >
        {newsList.map((news, index) => (
          <div
            key={index}
            className=" border border-[#BABABA] rounded-[20px] p-[16.83px]"
          >
            <div className="lg:flex gap-[34px]">
              <img
                className="rounded-[20px] h-[288px] w-full object-cover"
                src={news.image}
                alt={news.title}
              />

              <div className="mt-4">
                <div className="text-navColor text-[15.98px] font-medium">
                  {news.date}
                </div>
                <div className="mt-2 text-[16px] font-semibold">
                  {news.title}
                </div>
                <div className="mt-2 text-[14px] text-gray-600">
                  {news.news}
                </div>
                <div className="mt-2 text-[14px] font-medium">
                  {news.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default NewsComponent;
