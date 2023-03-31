import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "../../api";
import {  removeFromFavorites } from "./favorites";

export const getList = createAsyncThunk("get/list", async (query) => getCharacters(query)) 
export const addToFavorites = createAsyncThunk("add/favorites", (character) => character);

const characterSlice = createSlice({
  name: "character",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, { payload }) => payload)
      .addCase(getList.pending, (state, { payload }) => "loading")
      .addCase(getList.rejected, (state, { payload }) => "failed")
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        const index = state.list.findIndex(item => item.id === payload.id); 
        state.list.splice(index, 1)
      })
      .addCase(removeFromFavorites.fulfilled, (state, { payload }) => {
        state.list.push(payload)
    })
    
  },
});



export default characterSlice.reducer;
