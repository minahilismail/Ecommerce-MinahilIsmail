import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../../types/types";
import AxiosInstance from "../../utils/instance/axiosinstance";

const useScrollProducts = (url: string) => {
  const [products, setProducts] = useState<PRODUCT_ITEM[]>([]);

  useEffect(() => {
    AxiosInstance.get(url).then((response) => setProducts(response.data));
  }, []);
  return [products];
};
export default useScrollProducts;
