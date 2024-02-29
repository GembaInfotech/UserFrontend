import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {contactform} from '../api/ContactAPI/ContactAPI'

export const contactformAsync = createAsyncThunk(
  'contact/add',
  async ({ values }) => {
    const response = await contactform({ values });
    return response.data;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactformAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(contactformAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(contactformAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default contactSlice.reducer;
