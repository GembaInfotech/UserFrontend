import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userData } from '../api/UserAPI/UserAPI';

export const userDataAsync = createAsyncThunk(
  'user/userData',
  async () => {
    const response = await userData();
    console.log(response)
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'userData',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(userDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default userSlice.reducer;
