import { USER_REVIEW } from "../../types/types";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";

export const REVIEWS: USER_REVIEW[] = [
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

export const SETTINGS = {
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
