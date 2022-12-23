import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { likeItems } from "../../types/likeTypes";
import { RootState } from "../store";

interface LikeSliceState {
    items: likeItems[];
    totalPrice: number;
  }

const initialState: LikeSliceState = {
    items: [],
    totalPrice: 0,
  };

  export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<likeItems>) {
         const findItem = state.items.find(obj => obj.id === action.payload.id);
    
          if (findItem) {
            findItem.count++;
          } else {
            state.items.push({
              ...action.payload,
              count: 1, 
            });
          }
          state.totalPrice = state.items.reduce((sum, obj) => {
            return obj.count + sum;
          }, 0)
        },
        removeItems(state, action: PayloadAction<string>) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        },
      },
    });

export const selectLikeItemById = (id: string) => (state: RootState) => state.like.items.find(obj => obj.id === id)
export const selectLike = (state: RootState) => state.like;    
export const { addItems, removeItems } = likeSlice.actions;
export default likeSlice.reducer;