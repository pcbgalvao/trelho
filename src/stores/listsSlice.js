import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import listsRestApi from "../restapis/listsRestApi";
import CONSTANTS from "../constants";
const fetchLists = createAsyncThunk("/lists/list", async (searchFields) => {
  searchFields = { ...searchFields, fk_userid: "1" };
  const response = await listsRestApi.getLists(searchFields);
  return response;
});

const createList = createAsyncThunk("/lists/create", async (listForm) => {
  const response = await listsRestApi.createList(listForm);
  return response;
});

const renameListName = createAsyncThunk("/lists/rename", async (listForm) => {
  const response = await listsRestApi.renameListName(listForm);
  return response;
});

const listsSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    updateList(state, action) {
      return _.unionBy([action.payload], state, "_id");
    },
  },

  extraReducers: {
    [renameListName.fulfilled]: (state, action) => {
      return _.unionBy([action.payload], state, "_id");
      // return [...state, ...action.payload];
    },
    [fetchLists.fulfilled]: (state, action) => {
      return action.payload.reduce(
        (newlist, list) => ((newlist[list._id] = list), newlist),
        {}
      );
      // return [...state, ...action.payload];
    },
    [createList.fulfilled]: (state, action) => {
      const newList = action.payload;
      return {...state, [newList._id]: newList};
    },
  },
});

export const { updateList, setListName } = listsSlice.actions;
export default listsSlice.reducer;
export { renameListName, fetchLists, createList };
