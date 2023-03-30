import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCharacters } from "../../api";
import { FavoritesState, removeFromFavorites } from "./favorites";
import { produce, Draft } from "immer";
import { Character } from "../../types";



export type ListState = {
  info: {
      count: number,
      pages: number,
      next: string | null,
      prev: string | null
    },
    list:  Character[]
}




export const getList = createAsyncThunk("get/list", async () => getCharacters());
export const addToFavorites = createAsyncThunk("add/favorites", (character) => character);

const characterSlice = createSlice({
  name: "character",
  initialState: {} ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.fulfilled, (state, { payload }) => payload)
      .addCase(getList.pending, (state, { payload }) => "carregando")
      .addCase(getList.rejected, (state, { payload }) => "falha ao carregar")
      .addCase(addToFavorites.fulfilled, (state, { payload }:PayloadAction<any>) => {
        return produce(state, (draftState: Draft<ListState>) => {
          const index = draftState.list.findIndex((item) => item.id === payload.id);
          draftState.list.splice(index, 1);
        });
      })
      .addCase(removeFromFavorites.fulfilled, (state, { payload }:PayloadAction<any>) => {
        return produce(state, (draftState: Draft<FavoritesState>) => {
          draftState.characters.push(payload);
        });
    })
    
  },
});



export default characterSlice.reducer;
