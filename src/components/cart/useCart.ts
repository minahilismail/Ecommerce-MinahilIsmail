import { useAppDispatch } from "../../hooks/hooks";
import { removeAll } from "../../redux/slices/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  return { handleRemoveAll };
};
export default useCart;
