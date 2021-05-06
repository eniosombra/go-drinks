import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../slices/category/categorySlice';

export default configureStore({
  reducer: {
    category: categorySlice,
  },
});
