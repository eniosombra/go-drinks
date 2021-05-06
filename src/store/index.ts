import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import categorySlice from '../slices/category/category.slice';

export default configureStore({
  reducer: {
    category: categorySlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
