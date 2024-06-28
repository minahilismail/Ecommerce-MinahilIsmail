import { CartItem } from "../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<CartItem> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state?.find((item) => item?.id === action?.payload.id);
      if (!existingItem) {
        state.push(action?.payload);
      } else {
        // Increase quantity if item already exists in the cart
        existingItem.quantity += 1;
      }
    },
    remove(state, action: PayloadAction<CartItem>) {
      // Remove item from cart by ID
      return state?.filter((item) => item?.id !== action?.payload.id);
    },
    adjustQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const existingItem = state?.find((item) => item?.id === productId);
      if (existingItem) {
        // Adjust quantity of the specified item
        existingItem.quantity = quantity;
      }
    },
    removeAll() {
      // Empty the cart
      return initialState;
    },
  },
});

export const { add, remove, adjustQuantity, removeAll } = cartSlice?.actions;
export default cartSlice?.reducer;
