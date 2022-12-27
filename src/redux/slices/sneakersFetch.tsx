import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_SNEAKERS } from "../../env";
import { Sneakers } from "../../types/sneakersTypes";

export const fetchSneakers = createAsyncThunk<Sneakers[], Record<string, string>>(
    "sneakers/fetchSneakersStatus",
    async (params) => {
      const {search, sortBy, order} = params;
      const { data } = await axios.get<Sneakers[]>(
       `${GET_SNEAKERS}${search}&sortBy=${sortBy}&order=${order}`
      );
      return data;
    }
  );

  export interface SneakersSearch {
    search: string;
    sortBy: string;
    order: string; 
  }