import { useParams } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { CartItem } from "../types/types";

const useFetchProductIdFromUrl = (): [
  CartItem | undefined,
  number | undefined
] => {
  const { productId } = useParams<{ productId: string }>();
  const count = useAppSelector((state) => state?.cart);
  // Convert productId to number
  const productIdNum = productId ? parseInt(productId) : undefined;
  const productInCart = count?.find((item) => item?.id === productIdNum);
  return [productInCart, productIdNum];
};
export default useFetchProductIdFromUrl;
