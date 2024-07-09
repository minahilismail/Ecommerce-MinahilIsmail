import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { add, remove } from "../../redux/slices/wishlistSlice";
import { PRODUCT_ITEM } from "../../types/types";

const useWishlistIcon=(product:PRODUCT_ITEM)=>{
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector((state)=>state.wishlist);
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    function handleWishlistIconClick(e: React.MouseEvent){
        e.preventDefault();
    if (isInWishlist) {
      dispatch(remove(product));
      toast.success("Item removed from wishlist");
    } else {
      dispatch(add(product));
      toast.success("Item added to wishlist");
    }
  };

    return {handleWishlistIconClick,isInWishlist};
};
export default useWishlistIcon;