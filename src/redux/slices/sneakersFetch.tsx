import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Sneakers } from "../../types/sneakersTypes";

export const fetchSneakers = createAsyncThunk<Sneakers[], Record<string, string>>(
    "sneakers/fetchSneakersStatus",
    async (params) => {
      const {search, sortBy, order} = params;
      const { data } = await axios.get<Sneakers[]>(
       `https://63630b2e66f75177ea3c41dc.mockapi.io/sneakers?${search}&sortBy=${sortBy}&order=${order}`
      );
      return data;
    }
  );

  export interface SneakersSearch {
    search: string;
    sortBy: string;
    order: string; 
  }