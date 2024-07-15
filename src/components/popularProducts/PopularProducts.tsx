import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetchCategories from "../../hooks/useFetchCategories";
import usePopularProducts from "./usePopularProducts";
import Loader from "../loader/Loader";
import useGetProducts from "../../hooks/useGetProducts";
import { RESPONSIVE } from "../../constants/products";
import ProductCard from "../productCard/productCard";

const PopularProducts: React.FC = () => {
  const { isLoading, isError } = useGetProducts();
  const [categories] = useFetchCategories(
    "https://fakestoreapi.com/products/categories"
  );

  const [filteredProducts, handleFilterButtonClick] = usePopularProducts(
    "https://fakestoreapi.com/products"
  );

  var i: number = 0;
  const cards = categories?.map((category) => (
    <div
      onClick={() => handleFilterButtonClick(category)}
      key={i++}
      className="py-[10px] cursor-pointer mb-[32px] relative items-center justify-center text-secondary text-[16.38px] font-medium flex gap-[13px] border border-borderClr3 overflow-hidden truncate shadow-lg mx-auto rounded-3xl"
    >
      {category}
    </div>
  ));

  const catProCards = filteredProducts?.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  if (isLoading || isError) return <Loader />;
  return (
    <>
      <div className="mx-6 lg:mx-[61px]">
        <h1 className="text-secondary text-[27.38px] font-semibold mb-[15px]">
          Popular products
        </h1>
        <div className="">
          <Carousel
            responsive={RESPONSIVE}
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
          <div className="h-[16px] w-[16px] border border-carouselDotsClr bg-primary rounded-full "></div>
          <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full "></div>
          <div className="h-[16px] w-[16px] border border-carouselDotsClr rounded-full "></div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
