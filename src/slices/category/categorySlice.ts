import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: 'Milk / Float / Shake',
  },
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;
