import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../../types/types";
import AxiosInstance from "../../utils/instance/axiosinstance";

const useRelatedProducts=(category:string)=>{
    const [products, setProducts] = useState<PRODUCT_ITEM[]>([]);

  useEffect(() => {
    AxiosInstance.get(`/products/category/${category}?limit=4`).then((response) => setProducts(response.data));
  }, []);
  return [products];
};
export default useRelatedProducts;