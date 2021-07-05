import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import checklistsRestApi from "../restapis/checkliststRestApi";
import CONSTANTS from "../constants";

const fetchChecklists = createAsyncThunk(
  "checklists/fetch",
  async (checklistForm) => {
    const response = await checklistsRestApi.getChecklists(checklistForm);
    return response;
  }
);

const createChecklist = createAsyncThunk(
  "checklists/create",
  async (checklistForm) => {
    const response = await checklistsRestApi.createChecklist(checklistForm);
    return response;
  }
);

const insertChecklistItem = createAsyncThunk(
  "checklists/items/insert",
  async (itemForm) => {
    const response = await checklistsRestApi.insertItem(itemForm);
    return response;
  }
);

const updateChecklistItem = createAsyncThunk(
  "checklists/items/update",
  async (itemForm) => {
    const response = await checklistsRestApi.updateItem(itemForm);
    return response;
  }
);

export const checklistsSlice = createSlice({
  name: "checklists",
  initialState: [],
  reducers: {},

  extraReducers: {
    [fetchChecklists.fulfilled]: (state, action) => {
      return [...state, ...action.payload];
    },
    [createChecklist.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
    [insertChecklistItem.fulfilled]: (state, action) => {
      const { newItem, checklistId } = action.meta.arg;

      return _.unionBy(state, { _id: checklistId, items: newItem }, "_id");
    },
    [updateChecklistItem.fulfilled]: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export default checklistsSlice.reducer;
export {
  fetchChecklists,
  createChecklist,
  updateChecklistItem,
  insertChecklistItem,
};
