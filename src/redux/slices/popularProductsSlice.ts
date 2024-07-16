import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../utils/instance/axiosinstance';
import { PRODUCT_ITEM } from '../../types/types';

// Async thunks to fetch data
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await AxiosInstance.get('/products');
  return response.data;
});

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await AxiosInstance.get('/products/categories');
  return response.data;
});

const popularProductsSlice = createSlice({
  name: 'popularProducts',
  initialState: {
    items: [] as PRODUCT_ITEM[],
    categories: [] as string[],
    filteredItems: [] as PRODUCT_ITEM[],
    selectedFilters: [] as string[],
    isLoading: false,
    isError: false,
  },
  reducers: {
    toggleCategoryFilter: (state, action) => {
      const category = action.payload;
      if (state.selectedFilters.includes(category)) {
        state.selectedFilters = state.selectedFilters.filter((cat) => cat !== category);
      } else {
        state.selectedFilters.push(category);
      }
      state.filteredItems = state.selectedFilters.length
        ? state.items.filter((item) => state.selectedFilters.includes(item.category))
        : state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filteredItems = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { toggleCategoryFilter } = popularProductsSlice.actions;

export default popularProductsSlice.reducer;
