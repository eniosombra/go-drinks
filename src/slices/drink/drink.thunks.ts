import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

export const getDrinksByCategory = createAsyncThunk(
  'drink/getDrinksByCategory',
  async (categoryName: string) => await api.get(`/filter.php?c=${categoryName}`)
);
