import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardChecklistsRestApi from "../restApi/cardChecklistsRestApi";
import CONSTANTS from "../constants";

const INITIAL_STATE = [
  {
    _id: "1",
    fk_userid: "1",
    fk_cardid: "1",
    title: "Leaving room"
  },
  {
    _id: "2",
    fk_userid: "1",
    fk_cardid: "2",
    title: "Kitechen"
  },
  {
    _id: "3",
    fk_userid: "1",
    fk_cardid: "3",
    title: "Leaving room"
  },
  {
    _id: "4",
    fk_userid: "1",
    fk_cardid: "1",
    title: "Bed room"
  },
  {
    _id: "5",
    fk_userid: "1",
    fk_cardid: "1",
    title: "Buttler"
  },
  {
    _id: "6",
    fk_userid: "1",
    fk_cardid: "1",
    title: "Cleaning"
  }
];

export const checklistsSlice = createSlice({
  name: "checklists",
  initialState: INITIAL_STATE,
  reducers: {
    setCardChecklist: (state, action) => {
      return _.unionBy([action.payload], state, "_id");
    },
    updateChecklistItem: (state, action) => {
      return action.payload;
      // _.unionBy([action.payload], state, "_id")
    },
    updateChecklist: (state, action) => {
      return _.unionBy([action.payload], state, "_id");
    },
    createChecklist: (state, action) => {
      return [...state, action.payload];
    },
    removeChecklist: (state, action) => {
      const checklistId = action.payload;
      return _.reject(state, (checklist) => {
        return checklist._id === checklistId;
      });
    }
  },

  extraReducers: {}
});

export const selectcardName = (state) => {
  console.log("state-", state);
  return state.checklistsSlice.cardname;
};
export const selectLists = (state) => state.checklistsSlice.lists;

export const {
  updateChecklistItem,
  setCardChecklist,
  createChecklist,
  updateChecklist,
  removeChecklist
} = checklistsSlice.actions;

// ### Reducers
//
export default checklistsSlice.reducer;
