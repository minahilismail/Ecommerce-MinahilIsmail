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
    <div className="md:mb-[101px]">
      <div className="flex mx-6 items-center justify-between lg:ml-[61px] lg:mr-[62px] md:mb-[52px] mb-[23px]">
        <div className="text-secondary text-[25.38px] leading-[38.07px] font-semibold">
          Latest news
        </div>
        <div className="text-secondary text-[20.38px] leading-[30.57px] font-medium">View all</div>
      </div>
      <div className="mx-[17px]  xxl:mx-[60px]">
      <Slider
        {...SETTINGS}
        className="flex gap-[20px]"
      >
        {NEWS_LIST.map((news, index) => (
          <div
            key={index}
            className=" border border-reviewBorder rounded-[20px] md:px-[16.5px] px-[11.5px] md:py-[34.5px] py-[21px] md:mb-[40px] mb-[43px]"
          >
            <div className="xl:flex gap-[34px]">
              <img
                className="rounded-[20px] h-[288px] xxl:h-[288px] md:h-[250px] w-full object-contain"
                src={news.image}
                alt={news.title}
              />

              <div className="text-secondary md:mx-0 mx-[26.5px]">
                <div className=" border border-borderClr7 rounded-[20px] flex items-center justify-center w-[147px] h-[41px] text-[20.38px] font-medium xl:mt-0 mt-[34px]">
                  {news?.date}
                </div>
                <div className="mt-2 text-[16px] font-semibold xl:text-nowrap text-wrap xxl:text-wrap">
                  {news?.title}
                </div>
                <div className="mt-[16px] text-[14px] text-navColor">
                  {news?.news}
                </div>
                <div className="text-navColor md:mt-[43px] mt-[16px] text-[14px] font-medium">
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
