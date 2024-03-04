import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { queryform } from '../api/QueryAPI/QueryAPI';

export const queryformAsync = createAsyncThunk(
  'query/add',
  async ({ values }) => {
    const response = await queryform({ values });
    return response.data;
  }
);

const querySlice = createSlice({
  name: 'query',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryformAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(queryformAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(queryformAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default querySlice.reducer;
