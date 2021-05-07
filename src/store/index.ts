import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import categorySlice from '../slices/category/category.slice';
import drinkSlice from '../slices/drink/drink.slice';

export default configureStore({
  reducer: {
    category: categorySlice,
    drink: drinkSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
