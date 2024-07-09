import { CART_ITEM } from "../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<CART_ITEM> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CART_ITEM>) {
      const existingItem = state?.find(
        (item) => item?.id === action?.payload.id
      );
      if (!existingItem) {
        state.push(action?.payload);
      } else {
        existingItem.quantity += 1;
      }
    },
    remove(state, action: PayloadAction<CART_ITEM>) {
      return state?.filter((item) => item?.id !== action?.payload.id);
    },
    adjustQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const existingItem = state?.find((item) => item?.id === productId);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    removeAll() {
      return initialState;
    },
  },
});

export const { add, remove, adjustQuantity, removeAll } = cartSlice?.actions;
export default cartSlice?.reducer;
