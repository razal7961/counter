import { createSlice } from "@reduxjs/toolkit";

export const counterslice=createSlice({
    name:'counterslice',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }
    }
})


export const {increment,decrement,reset}=counterslice.actions
export default counterslice.reducer