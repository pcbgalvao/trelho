import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import checklistItemsRestApi from "../restapis/checklistItemsRestApi";
import CONSTANTS from "../constants";

const fetchItems = createAsyncThunk("items/fetch", async (searchFields) => {
  const response = await checklistItemsRestApi.getItems(searchFields);
  return response;
});

const createItem = createAsyncThunk("/items/create", async (itemForm) => {
  const response = await checklistItemsRestApi.createItem(itemForm);
  return response;
});

const checklistItemsSlice = createSlice({
  name: "selectedChecklist",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
    [createItem.fulfilled]: (state, action) => {
      return [state, action.payload];
    },
  },
});

export default checklistItemsSlice.reducer;
export { fetchItems, createItem };
