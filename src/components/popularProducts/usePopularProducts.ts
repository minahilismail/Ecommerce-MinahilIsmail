import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  fetchCategories,
  fetchProducts,
  toggleCategoryFilter,
} from "../../redux/slices/popularProductsSlice";

const usePopularProducts = () => {
  const dispatch = useAppDispatch();
  const { categories, filteredItems, isLoading, isError } = useAppSelector(
    (state) => state.popularProducts
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFilterButtonClick = (category: string) => {
    dispatch(toggleCategoryFilter(category));
  };

  return {
    categories,
    filteredItems,
    isLoading,
    isError,
    handleFilterButtonClick,
  };
};
export default usePopularProducts;
