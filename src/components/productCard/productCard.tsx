import { Link } from "react-router-dom";
import Star from "../star/Star";

import { PRODUCT_ITEM } from "../../types/types";

import WishlistIcon from "../wishlistIcon/WishlistIcon";
import { Eye, ShoppingCart } from "iconsax-react";
import useProductCard from "./useProductCard";

interface ProductCardProps {
  product: PRODUCT_ITEM;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isHovered, setIsHovered, addToCart } = useProductCard();
  return (
    <div
      key={product.id}
      className="relative rounded-[19.67px] px-[13.28px] py-[22.74px] border border-borderClr2 overflow-hidden shadow-lg"
      style={{ height: "313.75px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-[1.97px] relative">
        <div className="flex items-center justify-center">
          <img
            className="object-contain"
            src={product.image}
            style={{ width: "282.28px", height: "168.18px" }}
            alt="Card Image"
          />
        </div>

        <div
          className={`absolute flex flex-col justify-start top-[170.15px] items-start text-left gap-[15.74px] max-w-[188px] text-secondary transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="font-semibold truncate text-ellipsis  max-w-[188px] text-[17.09px]">
            {product.title}
          </div>
          <div className="font-semibold text-textClr1 text-[17.09px]">
            ${product.price}
          </div>
          <div className="font-semibold text-border1">
            <Star stars={product.rating.rate} />
          </div>
        </div>

        <div
          className={`absolute top-[210.47px] px-[6.39px] w-full flex items-center justify-center  xxl:gap-[5.65px] gap-[20.65px] lg:gap-[9.65px] transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={() => addToCart(product)}
            className="py-[14.75px] cursor-pointer pr-[19.67px] pl-[25.57px] xxl:py-[14.75px] xxl:pr-[19.67px] xxl:pl-[25.57px] lg:py-[14.75px] lg:pr-[10px] lg:pl-[14px] flex items-center justify-between xxs:gap-[1.84px] gap-[39.84px] xxl:gap-[39.84px] lg:gap-[19px] rounded-[19.67px] bg-skyBlueClr"
          >
            <div className="text-cartBrownClr text-nowrap font-semibold text-[15.74px] leading-[23.6px]">
              Add to cart
            </div>
            <div className="bg-primary h-[30.49px] w-[30.49px] rounded-[491.77px] flex items-center justify-center">
              <ShoppingCart className="text-white h-[17.21px] w-[17.21px]" />
            </div>
          </div>
          <Link to={`/product/${product.id}`}>
            <div className="flex items-center justify-center pl-[25.75px] pr-[21.64px] xxl:pl-[25.75px] xxl:pr-[21.64px] lg:pl-[15.75px] lg:pr-[15.64px] pt-[18px] pb-[18px] rounded-[19.67px] bg-skyBlueClr">
              <Eye className=" text-black" />
            </div>
          </Link>
        </div>
      </div>
      <WishlistIcon product={product} />
    </div>
  );
};

export default ProductCard;
