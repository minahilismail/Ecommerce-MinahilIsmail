import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Star from "../star/Star";
import { Heart } from "iconsax-react";
import { Link } from "react-router-dom";
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchSingleFilterProducts from "../../hooks/useFetchSingleFilterProducts";

const PopularProducts: React.FC = () => {
  const [categories] = useFetchCategories(
    "https://fakestoreapi.com/products/categories"
  );
  const [filteredProducts, handleFilterButtonClick] =
    useFetchSingleFilterProducts("https://fakestoreapi.com/products");

  var i: number = 0;
  const cards = categories?.map((category) => (
    <div
      onClick={() => handleFilterButtonClick(category)}
      key={i++}
      className="py-[10px] cursor-pointer mb-[32px] relative items-center justify-center text-secondary text-[16.38px] font-medium flex gap-[13px] border border-[#B5B5B5] overflow-hidden truncate shadow-lg mx-auto rounded-3xl"
    >
      {category}
    </div>
  ));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1000, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  const catProCards = filteredProducts?.map((product) => (
    <div
      key={product?.id}
      className="relative rounded-2xl p-6 border border-[#A5A5A5] overflow-hidden shadow-lg flex flex-col justify-between"
      style={{ height: "305px" }}
    >
      <div className="space-y-4 sm:space-y-[43.35px]">
        <div className="flex items-center justify-center">
          <img
            className="object-contain"
            src={product?.image}
            style={{ width: "154px", height: "94px" }}
            alt="Card Image"
          />
        </div>

        <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary max-w-[188px]">
          <div className="font-semibold truncate">{product?.title}</div>
          <div className="font-semibold text-[#4A4A4A] text-[17.09px]">
            ${product.price}
          </div>

          <div className="flex flex-col md:flex-row md:items-center items-start md:space-y-0 space-y-1 justify-start md:justify-between font-semibold text-border1">
            <Star stars={product?.rating?.rate} />
            <Link
          to={`/product/${product?.id}`}>
            <div className="text-nowrap bg-primary rounded-md p-2 text-white">View Details</div>
        </Link>
          </div>
        </div>
      </div>
      
        <div className="absolute top-[30px] right-[20px] w-[27.54px] h-[27.54px] rounded-[122.4px] bg-favorite flex items-center justify-center">
          <Heart className="h-[14.45px] w-[14.45px]" />
        </div>
        
      
    </div>
  ));

  return (
    <>
      <div className="mx-6 lg:mx-[61px]">
        <h1 className="text-secondary text-[27.38px] font-semibold mb-[15px]">
          Popular products
        </h1>
        <div className="">
          <Carousel
            responsive={responsive}
            showDots={false}
            infinite={true}
            itemClass="px-1"
            arrows={false}
          >
            {cards}
          </Carousel>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[26.56px]">
          {catProCards}
        </div>
        <div className="flex items-center justify-center mb-5 gap-2 mt-[49px]">
          <div className="h-[16px] w-[16px] border border-[#ADADAD] bg-primary rounded-full "></div>
          <div className="h-[16px] w-[16px] border border-[#ADADAD] rounded-full "></div>
          <div className="h-[16px] w-[16px] border border-[#ADADAD] rounded-full "></div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
