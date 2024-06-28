import { useEffect, useState } from "react";
import { ProductItem } from "../types/types";
import axios from "axios";

const useFetchFilteredProducts = (
  url: string
): [
  ProductItem[],
  ProductItem[],
  React.Dispatch<React.SetStateAction<ProductItem[]>>
] => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);
  return [products, filteredProducts, setFilteredProducts];
};
export default useFetchFilteredProducts;
