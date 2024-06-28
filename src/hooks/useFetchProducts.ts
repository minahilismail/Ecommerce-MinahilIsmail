import { useEffect, useState } from "react";
import { ProductItem } from "../types/types";
import axios from "axios";

const useFetchProducts = (url: string) => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => setProducts(response.data));
  }, []);
  return [products];
};
export default useFetchProducts;
