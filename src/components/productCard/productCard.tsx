import React from "react";
import { Link } from "react-router-dom";
import Star from "../star/Star";

import { PRODUCT_ITEM } from "../../types/types";

import WishlistIcon from "../wishlistIcon/WishlistIcon";

interface ProductCardProps {
  product: PRODUCT_ITEM;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="relative rounded-[19.67px] px-[13.28px] py-[22.74px] border border-borderClr2 overflow-hidden shadow-lg"
      style={{ width: "308.83px",height: "313.75px" }}
    >
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col gap-[1.97px]"
      >
        <div className="flex items-center justify-center">
          <img
            className="object-contain"
            src={product.image}
            style={{ width: "282.28px", height: "168.18px" }}
            alt="Card Image"
          />
        </div>

        <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary max-w-[188px]">
          <div className="font-semibold truncate text-[17.09px]">{product.title}</div>
          <div className="font-semibold text-textClr1 text-[17.09px]">
            ${product.price}
          </div>
          <div className="font-semibold text-border1">
            <Star stars={product.rating.rate} />
          </div>
        </div>
      </Link>
      <WishlistIcon product={product} />
    </div>
  );
};

export default ProductCard;
