import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import listsRestApi from "../restapis/listsRestApi";
import CONSTANTS from "../constants";

const INITIAL_STATE = [
  {
    _id: "1",
    fk_boardid: 1,
    fk_userid: 1,
    name: "House Things",
  },
  {
    _id: "2",
    fk_boardid: 1,
    fk_userid: 1,
    name: "List Supermarket",
  },

  {
    _id: "3",
    fk_boardid: 1,
    fk_serid: 1,
    name: "Turism Journey",
  },
];

const fetchLists = createAsyncThunk("/lists/list", async (idUser) => {
  const response = await listsRestApi.getLists(idUser);
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
      return [...state, ...action.payload];
    },
    [createList.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { updateList, setListName } = listsSlice.actions;
export default listsSlice.reducer;
export { renameListName, fetchLists, createList };
