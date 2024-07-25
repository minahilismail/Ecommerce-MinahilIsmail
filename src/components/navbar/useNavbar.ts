import { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";

const useNavbar=()=>{

    const cartItems = useAppSelector((state) => state.cart.length);
  const wishlistItems = useAppSelector((state) => state.wishlist.length);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return {cartItems,wishlistItems,dropdownVisible,setDropdownVisible};

};
export default useNavbar;