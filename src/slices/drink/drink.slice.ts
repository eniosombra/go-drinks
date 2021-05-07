import { createSlice } from '@reduxjs/toolkit';
import { getDrinksByCategory } from './drink.thunks';

export const drinkSlice = createSlice({
  name: 'drink',
  initialState: {
    items: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDrinksByCategory.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export { getDrinksByCategory };
export default drinkSlice.reducer;
