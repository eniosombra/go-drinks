import { createSlice } from '@reduxjs/toolkit';
import { getDrinksByCategory, getDrinksByName } from './drink.thunks';

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

    builder.addCase(getDrinksByName.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export { getDrinksByCategory, getDrinksByName };
export default drinkSlice.reducer;
