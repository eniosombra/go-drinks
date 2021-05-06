import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async () => await api.get('/list.php?c=list')
);
