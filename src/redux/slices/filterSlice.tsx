import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum ;
}

export interface FilterSlice {
  searchValue: string;
  sort: Sort;
}

const initialState: FilterSlice = {
  searchValue: '',
  sort: { name: "Clear", sortProperty: SortPropertyEnum.RATING_DESC
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
   setSearchValue(state, action: PayloadAction<string>) {
    state.searchValue = action.payload;
   },
   setSort(state, action: PayloadAction<Sort>) {
    state.sort = action.payload;
   },
   setFilters(state, action: PayloadAction<FilterSlice>) {
    state.sort = action.payload.sort;
   } 
  },
});

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
export const { setSearchValue, setSort, setFilters} = filterSlice.actions;
export default filterSlice.reducer;
