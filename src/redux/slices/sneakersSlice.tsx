import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sneakers } from "../../types/sneakersTypes";
import { RootState } from "../store";
import { fetchSneakers } from "./sneakersFetch";

  export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
  }

  interface SneakersSliceState {
    items: Sneakers[];
    status: Status;
  }

  const initialState: SneakersSliceState = {
    items: [],
    status: Status.LOADING,
  };

  export const sneakersSlice = createSlice({
    name: "sneakers",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Sneakers[]>) {
        state.items = action.payload;
      },
    },
    extraReducers : (builder) => {
      builder.addCase(fetchSneakers.pending,(state, action) => {
        state.status = Status.LOADING;
        state.items = [];
      });
      builder.addCase(fetchSneakers.fulfilled,(state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
      });
      builder.addCase(fetchSneakers.rejected,(state, action) => {
        state.status = Status.ERROR;
        state.items = [];
      });
    }
  });

export const selectSneakersData = (state: RootState) => state.sneakers;

export const { setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
