import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { addToFavorites } from "./characters";
import { produce, Draft } from "immer";
import { Character } from "../../types";


  export type FavoritesState = {
    characters: Character[];
  }

  const initialState: FavoritesState = {
    characters: [],
  };

export const removeFromFavorites = createAsyncThunk("remove/favorites", (character) => character);

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addToFavorites.fulfilled, (state, action:PayloadAction<any>) => {
            return produce(state, (draftState: Draft<FavoritesState>) => {
                draftState.characters.push(action.payload);
              });
        })
        .addCase(removeFromFavorites.fulfilled, (state, {payload}:PayloadAction<any>) => {
            return produce(state, (draftState: Draft<FavoritesState>) => {
                const index = draftState.characters.findIndex(
                  (item) => item.id === payload.id
                );
                draftState.characters.splice(index, 1);
              });
        })
    }
})


export default favoritesSlice.reducer