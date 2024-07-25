import { useState } from "react";
import { PRODUCT_ITEM } from "../../types/types";
import { useAppDispatch } from "../../hooks/hooks";
import { add } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";

const useProductCard=()=>{
    const [isHovered, setIsHovered] = useState(false);
  const dispatch=useAppDispatch();
    const addToCart = (product: PRODUCT_ITEM) => {
      const productWithQuantity = { ...product, quantity: product.quantity || 1 };
      dispatch(add(productWithQuantity));
      toast.success("Item added to cart");
    };
  

  return {isHovered, setIsHovered,addToCart};

};
export default useProductCard;