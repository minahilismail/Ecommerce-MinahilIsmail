import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "../../utils/instance/axiosinstance";
import { PRODUCT_ITEM, PRODUCT_STATE } from "../../types/types";

const initialState: PRODUCT_STATE = {
  isLoading: false,
  isError: null,
  product: [],
};

export const fetchProductItems = createAsyncThunk(
  "products/fetchProductItems",
  async () => {
    const response = await AxiosInstance.get("/products");
    return response.data as PRODUCT_ITEM[];
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductItems.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(
        fetchProductItems.fulfilled,
        (state, action: PayloadAction<PRODUCT_ITEM[]>) => {
          state.isLoading = false;
          state.isError = null;
          state.product = action.payload;
        }
      )
      .addCase(fetchProductItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Failed to fetch products";
      });
  },
});
export default productSlice?.reducer;
