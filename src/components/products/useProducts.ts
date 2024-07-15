import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../../types/types";
import useFetchProductIdFromUrl from "../../hooks/useFetchProductIdFromUrl";
import { useAppDispatch } from "../../hooks/hooks";
import { add } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import AxiosInstance from "../../utils/instance/axiosinstance";

const useProducts = (
  url: string
) => {
  const dispatch =useAppDispatch();
  const [productInCart, productIdNum] = useFetchProductIdFromUrl();
  const [product, setProduct] = useState<PRODUCT_ITEM | null>(null);

  const [quantityCount, setQuantityCount] = useState<number>(
    productInCart?.quantity || 0
  );

  useEffect(() => {
    if (productIdNum !== undefined) {
      AxiosInstance.get(url).then((response) => {
        setProduct({
          ...response.data,
          quantity: productInCart?.quantity || 0,
        });
        setQuantityCount(productInCart?.quantity || 0);
      });
    }
  }, [productIdNum, productInCart]);

  const addToCart = (product: PRODUCT_ITEM) => {
    if (quantityCount === 0) return;
    const productWithQuantity = { ...product, quantity: quantityCount };
    dispatch(add(productWithQuantity));
    toast.success("Item added to cart");
  };

  const handleIncrement = () => {
    setQuantityCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (quantityCount > 0) {
      setQuantityCount((prevCount) => prevCount - 1);
    }
  };


  return {product, quantityCount,addToCart,handleIncrement,handleDecrement};
};
export default useProducts;
