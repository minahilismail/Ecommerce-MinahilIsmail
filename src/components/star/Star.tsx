import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { STAR_RATING } from "../../types/types";

const Star: React.FC<STAR_RATING> = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let num: number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= num ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return <div className="flex gap-[10.82px]">{ratingStar}</div>;
};
export default Star;
