import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchProductItems } from "../redux/slices/productSlice";

const useGetProducts = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, product } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductItems());
  }, []);
  return { isLoading, isError, product };
};
export default useGetProducts;
