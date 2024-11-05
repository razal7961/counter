import { configureStore } from "@reduxjs/toolkit";
import counterreducer from './storeslice'

export const store=configureStore({
    reducer:{
        counterreducer
    }
})