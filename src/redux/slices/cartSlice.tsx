import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItems } from "../../types/cartTypes";
import { RootState } from "../store";

interface CartSliceState {
    totalPrice: number;
    items: cartItems[];
  }

const initialState: CartSliceState = {
    items: [],
    totalPrice: 0,
  };

  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<cartItems>) {
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
                return (obj.price * obj.count) + sum;
              }, 0)
              
        },
        minusItems(state, action: PayloadAction<string>) {
          const findItem = state.items.find(obj => obj.id === action.payload);
    
          if (findItem) {
            findItem.count--;
          }
        },
        plusItem(state, action: PayloadAction<string>) {
          const findItem = state.items.find(obj => obj.id === action.payload);

          if(findItem) {
           findItem.count++;
          }

          state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum;
          }, 0)
        },
        removeItems(state, action: PayloadAction<string>) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
          state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum;
          }, 0)
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
          },
      },
    });

export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)
export const selectCart = (state: RootState) => state.cart;    
export const { addItems, removeItems, minusItems, clearItems, plusItem } = cartSlice.actions;
export default cartSlice.reducer;