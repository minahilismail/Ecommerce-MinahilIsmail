import { useParams } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { CART_ITEM } from "../types/types";

const useFetchProductIdFromUrl = (): [
  CART_ITEM | undefined,
  number | undefined
] => {
  const { productId } = useParams<{ productId: string }>();
  const count = useAppSelector((state) => state?.cart);
  const productIdNum = productId ? parseInt(productId) : undefined;
  const productInCart = count?.find((item) => item?.id === productIdNum);
  return [productInCart, productIdNum];
};
export default useFetchProductIdFromUrl;
