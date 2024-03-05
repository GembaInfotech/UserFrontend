import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVehicles, deleteVehicles } from '../api/ProfileAPI/VehiclesAPI';

export const fetchVehiclesAsync = createAsyncThunk(
  'Vehicles/fetch',
  async ({userId}) => {
    const response = await fetchVehicles({userId});
    console.log(response.data);
    return response.data;
  }
);
export const deleteVehiclesAsync = createAsyncThunk(
  'Vehicles/delete',
  async ({userid, id}) => {
    console.log(userid, id);
    const response = await deleteVehicles({userid, id});
    console.log(response);
    return response;
  }
);
const VehiclesSlice = createSlice({
  name: 'Vehicles',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehiclesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehiclesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchVehiclesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default VehiclesSlice.reducer;
