import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carousel.css";
import { NEWS_LIST } from "../../constants/news";
import { SETTINGS } from "../../constants/news";

const NewsComponent: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-6 lg:mx-[60px]">
        <div className="text-secondary text-[27.38px] font-semibold">
          Latest news
        </div>
        <div className="text-secondary font-medium">View all</div>
      </div>
      <Slider
        {...SETTINGS}
        className="flex gap-[26.17px] items-center justify-center mx-4 lg:mx-[60px] mt-[55.5px] mb-[101px]"
      >
        {NEWS_LIST.map((news, index) => (
          <div
            key={index}
            className=" border border-reviewBorder rounded-[20px] p-[16.83px]"
          >
            <div className="lg:flex gap-[34px]">
              <img
                className="rounded-[20px] h-[288px] w-full object-cover"
                src={news.image}
                alt={news.title}
              />

              <div className="mt-4">
                <div className="text-navColor text-[15.98px] font-medium">
                  {news?.date}
                </div>
                <div className="mt-2 text-[16px] font-semibold">
                  {news?.title}
                </div>
                <div className="mt-2 text-[14px] text-gray-600">
                  {news?.news}
                </div>
                <div className="mt-2 text-[14px] font-medium">
                  {news?.company}
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
