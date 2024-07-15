import { NEWS } from "../types/types";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";

export const NEWS_LIST: NEWS[] = [
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

export const SETTINGS = {
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
