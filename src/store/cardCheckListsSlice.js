import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardCheckListsRestApi from "../restApi/cardCheckListsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = [
  {
    id: 1,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Leaving room",
    items: [
      {
        name: "clean floor",
        value: false,
      },
      {
        name: "cleaning the dust",
        value: false,
      },
    ],
  },
  {
    id: 2,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Bed room",
    items: [
      {
        name: "clean floor",
        value: true,
      },
      {
        name: "make bed",
        value: false,
      },
    ],
  },

  {
    id: 3,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Buttler",
    items: [
      {
        name: "turkey",
        value: false,
      },
      {
        name: "Chickens' Legs",
        value: false,
      },
    ],
  },
  {
    id: 4,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Cleaning",
    items: [
      {
        name: "detergente loiça",
        value: true,
      },
      {
        name: "Vassoura",
        value: false,
      },
    ],
  },
];

export const cardCheckListsSlice = createSlice({
  name: "cardCheckLists",
  initialState: INITIAL_STATE,
  reducers: {
    setCardCheckList: (state, action) =>  {
      
      return state;
    }
  },
  extraReducers: {},
});

export const selectcardName = (state) => {
  console.log("state-", state);
  return state.cardCheckLists.cardname;
};
export const selectLists = (state) => state.cardCheckLists.lists;

export const {setCardCheckList} = cardCheckListsSlice.actions;

// ### Reducers
//
export default cardCheckListsSlice.reducer;
