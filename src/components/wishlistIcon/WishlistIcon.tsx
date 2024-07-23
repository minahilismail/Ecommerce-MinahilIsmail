import { Heart } from "iconsax-react";
import { PRODUCT_ITEM } from "../../types/types";
import useWishlistIcon from "./useWishlistIcon";
interface WishListIconProps {
  product: PRODUCT_ITEM;
  bgColor?:boolean;
  large?:boolean;
}

const WishlistIcon: React.FC<WishListIconProps> = ({ product ,bgColor=true,large}) => {
  const { handleWishlistIconClick, isInWishlist } = useWishlistIcon(product);
  return (
    <div
      onClick={handleWishlistIconClick}
      className={`absolute top-[35.41px] cursor-pointer right-[25.57px] w-[27.54px] h-[27.54px] rounded-[122.4px] 
      ${bgColor ? "bg-favorite" : ""}  flex items-center justify-center`}
    >
      <Heart
        className={ `${large? "w-[74px] h-[73px]":"h-[14.45px] w-[14.45px]"} h-[14.45px] w-[14.45px] ${
          isInWishlist ? "fill-current text-red-500" : ""
        }`}
      />
    </div>
  );
};
export default WishlistIcon;
