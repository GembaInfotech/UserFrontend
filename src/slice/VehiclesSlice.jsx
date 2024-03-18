import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVehicles, deleteVehicles, setDefaultVehicles , addVehicle} from '../api/ProfileAPI/VehiclesAPI';
export const fetchVehiclesAsync = createAsyncThunk(
  'Vehicles/fetch',
  async () => {
    const response = await fetchVehicles();
    return response.data;
  }
);
export const deleteVehiclesAsync = createAsyncThunk(
  'Vehicles/delete',
  async ({ id}) => {

    const response = await deleteVehicles({ id});
 
    return response;
  }
);
export const setDefaultVehicleAsync = createAsyncThunk(
  'Vehicles/setDefault',
  async ({token, id,def}) => {
      console.log(token )
    const response = await setDefaultVehicles({token, id,def});
    
    return response;
  }
);
export const addVehicleAsync = createAsyncThunk(
  'Vehicles/addVehicle',
  async ({formData}) => {
    const response = await addVehicle({formData});
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
export const selectVehicleById = (state) => {
  return state.Vehicles.data.find(vehicle => vehicle.def === true);
};

export default VehiclesSlice.reducer;
