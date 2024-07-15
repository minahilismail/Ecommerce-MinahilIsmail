import { useEffect, useState } from "react";
import AxiosInstance from "../../utils/instance/axiosinstance";

const useCategories = (): [{ [key: string]: number }] => {
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    AxiosInstance
      .get("/products/categories")
      .then((response) => {
        const categories = response.data;
        categories?.forEach((category: string) => {
          AxiosInstance
            .get(`/products/category/${category}`)
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

export default useCategories;
