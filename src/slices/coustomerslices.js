import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
  


const initialState = [];

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    editCustomer(state, action) {
      const { index, updatelist } = action.payload;
      const updatedState = [...state];
      updatedState[index] = updatelist;
      return updatedState;
    },
    deleteCustomer(state, action) {
      const { deleteIndex } = action.payload;
      const holddeleteData = [...state];
      const deleteUser = holddeleteData.filter(
        (item, index) => index !== deleteIndex
      );
      return deleteUser;
    },
  },
});
export const { addCustomer, editCustomer, deleteCustomer } =
  customerSlice.actions;
  export const customerReducer = customerSlice.reducer;






