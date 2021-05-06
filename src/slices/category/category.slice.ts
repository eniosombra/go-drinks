import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './category.thunks';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: 'Milk / Float / Shake',
    item: {},
  },
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export const { changeCategory } = categorySlice.actions;
export { getCategories };
export default categorySlice.reducer;
