import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../../types/types";
import axios from "axios";
import useFetchProductIdFromUrl from "../../hooks/useFetchProductIdFromUrl";

const useProducts = (
  url: string
): [
  PRODUCT_ITEM | null,
  number,
  React.Dispatch<React.SetStateAction<number>>
] => {
  const [productInCart, productIdNum] = useFetchProductIdFromUrl();
  const [product, setProduct] = useState<PRODUCT_ITEM | null>(null);

  const [quantityCount, setQuantityCount] = useState<number>(
    productInCart?.quantity || 0
  );

  useEffect(() => {
    if (productIdNum !== undefined) {
      axios.get(url).then((response) => {
        setProduct({
          ...response.data,
          quantity: productInCart?.quantity || 0,
        });
        setQuantityCount(productInCart?.quantity || 0);
      });
    }
  }, [productIdNum, productInCart]);

  return [product, quantityCount, setQuantityCount];
};
export default useProducts;
