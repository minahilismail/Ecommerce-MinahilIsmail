import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../types/types";
import AxiosInstance from "../utils/instance/axiosinstance";

const useFetchFilteredProducts = (
  url: string
): [
  PRODUCT_ITEM[],
  PRODUCT_ITEM[],
  React.Dispatch<React.SetStateAction<PRODUCT_ITEM[]>>
] => {
  const [products, setProducts] = useState<PRODUCT_ITEM[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<PRODUCT_ITEM[]>([]);

  useEffect(() => {
    AxiosInstance.get(url).then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);
  return [products, filteredProducts, setFilteredProducts];
};
export default useFetchFilteredProducts;
