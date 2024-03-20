import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParking } from '../api/ParkingAPI/ParkingAPI';
import { validatePayment } from '../api/PaymentAPI/PaymentAPI';
export const validatePaymentAsync = createAsyncThunk(
    'payment/fetch',
    async ({ radii }) => {
        const response = await validatePayment({ radii });
        return response;
    }
);
const PaymentSlice = createSlice({
    name: 'parkings',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(validatePaymentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(validatePaymentAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(validatePaymentAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default PaymentSlice.reducer;
