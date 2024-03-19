import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name:'token',
    initialState: {value:''},
    reducers :{
        setter :(state, action)=>{
            state.value=action.payload;
            console.log("state" , state.value)
        }
    }
})
export const {setter} =   tokenSlice.actions;

export default  tokenSlice.reducer