import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { adjustQuantity, remove } from "../../redux/slices/cartSlice";
import { CART_ITEM } from "../../types/types";

const useCart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state?.cart);

  const removeFromCart = (product: CART_ITEM) => {
    dispatch(remove(product));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(adjustQuantity({ productId, quantity }));
  };
  let subTotal = 0;
  return { products, removeFromCart, handleQuantityChange, subTotal };
};
export default useCart;
