import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { customerReducer } from "../slices/coustomerslices";

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});



