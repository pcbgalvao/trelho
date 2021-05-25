import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import listsRestApi from "../restApi/listsRestApi";
import CONSTANTS from "../constants";

const INITIAL_STATE = [
  {
    _id: "1",
    fk_boardid: 1,
    fk_userid: 1,
    name: "House Things"
  },
  {
    _id: "2",
    fk_boardid: 1,
    fk_userid: 1,
    name: "List Supermarket"
  },

  {
    _id: "3",
    fk_boardid: 1,
    fk_serid: 1,
    name: "Turism Journey"
  }
];

const listsSlice = createSlice({
  name: "lists",
  initialState: INITIAL_STATE,
  reducers: {
    fetchLists(state, action) {
      return state;
    },
    createList(state, action) {
      return [...state, action.payload];
    },
    updateList(state, action) {
      return _.unionBy([action.payload], state, "_id");
    }
  },
  extraReducers: {}
});

export const { updateList, setListName, createList } = listsSlice.actions;
export default listsSlice.reducer;
