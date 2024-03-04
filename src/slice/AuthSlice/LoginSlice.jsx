import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../api/AuthAPI/LoginAPI';

export const loginAsync = createAsyncThunk(
    'login/fetch',
    async ({ values }) => {
        console.log(values);
        const response = await login({ values });
        return response;
    }
);
const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default LoginSlice.reducer;
