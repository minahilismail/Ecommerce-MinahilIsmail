import { useEffect, useState } from "react";
import { ProductItem } from "../types/types";
import axios from "axios";

const useFetchSingleFilterProducts = (
  url: string
): [ProductItem[], (selectedCategory: string) => void] => {
  const [catPro, setCategoriesProducts] = useState<ProductItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCategoriesProducts(response.data);
      setFilteredProducts(response.data); // Set all products as the initial state
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
