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
    <div className="mb-[101px]">
      <div className="flex items-center justify-between mx-6 lg:ml-[61px] lg:mr-[62px] mb-[52px]">
        <div className="text-secondary text-[25.38px] leading-[38.07px] font-semibold">
          Latest news
        </div>
        <div className="text-secondary text-[20.38px] leading-[30.57px] font-medium">View all</div>
      </div>
      <div className="mx-6 lg:mx-[60px]">
      <Slider
        {...SETTINGS}
        className="flex gap-[20px]"
      >
        {NEWS_LIST.map((news, index) => (
          <div
            key={index}
            className=" border border-reviewBorder rounded-[20px] px-[16.5px] py-[34.5px] mb-[40px]"
          >
            <div className="lg:flex gap-[34px]">
              <img
                className="rounded-[20px] h-[288px] w-full object-cover"
                src={news.image}
                alt={news.title}
              />

              <div className="text-secondary">
                <div className=" border border-borderClr7 rounded-[20px] flex items-center justify-center w-[147px] h-[41px] text-[20.38px] font-medium">
                  {news?.date}
                </div>
                <div className="mt-2 text-[16px] font-semibold">
                  {news?.title}
                </div>
                <div className="mt-2 text-[14px] text-navColor">
                  {news?.news}
                </div>
                <div className="text-navColor mt-2 text-[14px] font-medium">
                  {news?.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
};

export default NewsComponent;
