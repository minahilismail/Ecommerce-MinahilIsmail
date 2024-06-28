import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchFilteredProducts from "./useFetchFilteredProducts";
import { ProductItem } from "../types/types";

const useFetchMultiFilteredProducts = (
  url: string
): [
  string[],
  React.Dispatch<React.SetStateAction<string[]>>,
  ProductItem[],
  (selectedCategory: string) => void,
  () => void
] => {
  const [products, filteredProducts, setFilteredProducts] =
    useFetchFilteredProducts(url);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterButtonClick = (selectedCategory: string) => {
    let updatedFilters;
    if (selectedFilters?.includes(selectedCategory)) {
      updatedFilters = selectedFilters?.filter((el) => el !== selectedCategory);
    } else {
      updatedFilters = [...selectedFilters, selectedCategory];
    }
    setSelectedFilters(updatedFilters);

    const searchParams = new URLSearchParams(location.search);
    if (updatedFilters.length > 0) {
      searchParams?.set("categories", updatedFilters.join(","));
    } else {
      searchParams?.delete("categories");
    }
    navigate(`${location.pathname}?${searchParams?.toString()}`);
  };

  const resetFilters = () => {
    setSelectedFilters([]);
    navigate(location.pathname);
  };

  useEffect(() => {
    if (selectedFilters?.length > 0) {
      let tempItems = selectedFilters?.map((selectedCategory) => {
        return products?.filter((item) => item?.category === selectedCategory);
      });
      setFilteredProducts(tempItems?.flat());
    } else {
      setFilteredProducts([...products]);
    }
  }, [selectedFilters, products, setFilteredProducts]);
  return [
    selectedFilters,
    setSelectedFilters,
    filteredProducts,
    handleFilterButtonClick,
    resetFilters,
  ];
};
export default useFetchMultiFilteredProducts;
