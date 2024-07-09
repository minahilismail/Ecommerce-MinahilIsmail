import { Heart } from "iconsax-react";
import { PRODUCT_ITEM } from "../../types/types";
import useWishlistIcon from "./useWishlistIcon";
interface WishListIconProps {
  product: PRODUCT_ITEM;
}

const WishlistIcon: React.FC<WishListIconProps> = ({ product }) => {
  const { handleWishlistIconClick, isInWishlist } = useWishlistIcon(product);
  return (
    <div
      onClick={handleWishlistIconClick}
      className="absolute top-[30px] cursor-pointer right-[20px] w-[27.54px] h-[27.54px] rounded-[122.4px] bg-favorite flex items-center justify-center"
    >
      <Heart
        className={`h-[14.45px] w-[14.45px] ${
          isInWishlist ? "fill-current text-red-500" : ""
        }`}
      />
    </div>
  );
};
export default WishlistIcon;
