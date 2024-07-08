import { useEffect, useState } from "react";
import { PRODUCT_ITEM } from "../types/types";
import axios from "axios";

const useFetchSingleFilterProducts = (
  url: string
): [PRODUCT_ITEM[], (selectedCategory: string) => void] => {
  const [catPro, setCategoriesProducts] = useState<PRODUCT_ITEM[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<PRODUCT_ITEM[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCategoriesProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters?.includes(selectedCategory)) {
      let filters = selectedFilters?.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters?.length > 0) {
      let tempItems = selectedFilters?.map((selectedCategory) => {
        let temp = catPro?.filter((item) => item?.category === selectedCategory);
        return temp;
      });
      setFilteredProducts(tempItems?.flat());
    } else {
      setFilteredProducts([...catPro]);
    }
  };
  return [filteredProducts, handleFilterButtonClick];
};
export default useFetchSingleFilterProducts;
