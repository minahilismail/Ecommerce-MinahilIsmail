import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCategorywiseProductsCount = (): [{ [key: string]: number }] => {
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        const categories = response.data;
        categories?.forEach((category: string) => {
          axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => {
              setProductCounts((prevCounts) => ({
                ...prevCounts,
                [category]: response?.data?.length,
              }));
            });
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return [productCounts];
};

export default useFetchCategorywiseProductsCount;
