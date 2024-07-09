import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../../types/types";
import axios from "axios";

const useScrollProducts = (url: string) => {
  const [products, setProducts] = useState<PRODUCT_ITEM[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => setProducts(response.data));
  }, []);
  return [products];
};
export default useScrollProducts;
