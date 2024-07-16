import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { adjustQuantity, remove } from "../../redux/slices/cartSlice";
import { CART_ITEM } from "../../types/types";

const useSingleCartItem = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart);

  const removeFromCart = (product: CART_ITEM) => {
    dispatch(remove(product));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(adjustQuantity({ productId, quantity }));
  };

  const subTotal = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return { products, removeFromCart, handleQuantityChange, subTotal };
};

export default useSingleCartItem;
