import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "../loader/Loader";
import ProductCard from "../productCard/productCard";
import { RESPONSIVE } from "../../constants/products";
import usePopularProducts from "./usePopularProducts";

const PopularProducts: React.FC = () => {
  const {
    categories,
    filteredItems,
    isLoading,
    isError,
    handleFilterButtonClick,
  } = usePopularProducts();

  if (isLoading || isError) return <Loader />;

  return (
    <div className="mx-6 lg:mx-0 xl:mx-6 xxl:mx-0">
      <div className="lg:grid lg:grid-cols-2 flex flex-col xxl:mx-[61px] lg:mx-[30px]">
      <h1 className="text-secondary text-[27.38px] font-semibold mb-[16px] md:mb-[53px]">
        Popular products
      </h1>
      <div>
        <div>
        <Carousel
          responsive={RESPONSIVE}
          showDots={false}
          infinite={true}
          itemClass="px-1"
          arrows={false}
        >
          {categories?.map((category, index) => (
            <div
              onClick={() => handleFilterButtonClick(category)}
              key={index}
              className="py-[10px] lg:m-0 mb-[32px] px-[30.5px] max-x-[139px] h-[45px] cursor-pointer flex items-center justify-center text-secondary text-[16.38px] leading-[24.57px] font-medium border border-borderClr3 overflow-hidden text-ellipsis truncate shadow-lg rounded-[20px]"
            >
              <div className="max-w-[68px] truncate text-ellipsis">{category}</div>
              
            </div>
          ))}
        </Carousel>
        </div>
      </div>
      </div>
      
      <div className="grid xl:grid-cols-4 items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[26.56px] gap-y-[30.49px] xxl:ml-[64.01px] xxl:mr-[61px]">
        {filteredItems?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 md:mt-[51.01px] md:mb-[51px] mt-[35.34px] mb-[30px]">
        <div className="h-[16px] w-[16px] border border-carouselDotsClr bg-primary rounded-full"></div>
        <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full"></div>
        <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full"></div>
      </div>
    </div>
  );
};

export default PopularProducts;
