import Carousel, { ArrowProps } from "react-multi-carousel";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import useScrollProducts from "./useScrollProducts";

const ScrollableProducts: React.FC = () => {
  const [products] = useScrollProducts("/products?limit=6");

  const cards = products?.map((product) => (
    <Link
      to={`/product/${product?.id}`}
      key={product?.id}
      className="relative h-[147px] flex px-[36.54px]  md:px-[43.14px] py-[26.5px] items-center rounded-[20px] border border-borderClr2 overflow-hidden"
    >
      <div className="flex justify-center items-center gap-[43.35px] md:px-0 px-5">
        <img
          className="sm:h-[94px] sm:w-[154px] h-[90px] w-[70px] object-contain"
          src={product?.image}
          alt="Card Image"
        />
        <div className="flex flex-col gap-[9.42px] text-secondary max-w-[188px] max-h-[69.42px]">
          <div className="font-semibold truncate">{product?.title}</div>
          <div className="font-semibold">(6 items)</div>
        </div>
      </div>
    </Link>
  ));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button
        className="hidden md:block absolute -right-2 top-[75px] transform -translate-y-1/2 z-10 bg-creamClr p-2 rounded-full w-[37px] h-[37px]"
        onClick={onClick}
      >
        <ArrowRight size="24" />
      </button>
    );
  };

  const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button
        className="hidden md:block absolute -left-3 top-[75px] transform -translate-y-1/2 z-10 bg-creamClr p-2 rounded-full w-[37px] h-[37px]"
        onClick={onClick}
      >
        <ArrowLeft size="24" />
      </button>
    );
  };

  return (
    <div className="mx-6 xxl:mx-[109px] lg:mx-[70px] md:mb-[78px] mb-[32px] md:mt-[52px] mt-[32px]">
      <Carousel className="flex gap-[39px]"
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        showDots={false}
        infinite={true}
        itemClass="px-2"
      >
        {cards}
      </Carousel>
    </div>
  );
};

export default ScrollableProducts;
