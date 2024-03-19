import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from '../../api/AuthAPI/SignupAPI';

export const signUpAsync = createAsyncThunk(
    'SignUp/fetch',
    async ({ values }) => {
        const response = await signUp({ values });
        return response.data;
    }
);
const SignUpSlice = createSlice({
    name: 'SignUp',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(signUpAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default SignUpSlice.reducer;
