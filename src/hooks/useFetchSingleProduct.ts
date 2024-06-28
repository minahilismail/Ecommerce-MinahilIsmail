import { useEffect, useState } from "react";
import { ProductItem } from "../types/types";
import axios from "axios";
import useFetchProductIdFromUrl from "./useFetchProductIdFromUrl";

const useFetchSingleProducts = (
  url: string
): [
  ProductItem | null,
  number,
  React.Dispatch<React.SetStateAction<number>>
] => {
  const [productInCart, productIdNum] = useFetchProductIdFromUrl();
  const [product, setProduct] = useState<ProductItem | null>(null);

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
export default useFetchSingleProducts;
