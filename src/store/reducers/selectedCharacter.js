import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacterDetail } from "../../api";

export const getDetails = createAsyncThunk("get/details", async (name) => getCharacterDetail(name));


const selectedCharacterSlice = createSlice({
    name: "selectedCharacter",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getDetails.fulfilled, (state, { payload }) => payload)
          .addCase(getDetails.pending, (state, { payload }) => "carregando")
          .addCase(getDetails.rejected, (state, { payload }) => "falha ao carregar")
    }
})

export default selectedCharacterSlice.reducer