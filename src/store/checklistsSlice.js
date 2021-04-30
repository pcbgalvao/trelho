import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardChecklistsRestApi from "../restApi/cardChecklistsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE1 = [
  {
    _id: 1,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Leaving room",
    items: [
      {
        _id: 1,
        name: "clean floor",
        value: false,
      },
      {
        _id: 2,
        name: "cleaning the dust",
        value: false,
      },
    ],
  },
  {
    _id: 2,
    fk_userid: 1,
    fk_cardid: 12,
    title: "Kitechen",
    items: [
      {
        _id: 1,
        name: "clean floor",
        value: false,
      },
      {
        _id: 2,
        name: "cleaning the dust",
        value: false,
      },
    ],
  },
  {
    _id: 3,
    fk_userid: 1,
    fk_cardid: 13,
    title: "Leaving room",
    items: [
      {
        _id: 1,
        name: "clean floor",
        value: false,
      },
      {
        _id: 2,
        name: "cleaning the dust",
        value: false,
      },
    ],
  },
];

const INITIAL_STATE = [
  {
    _id: 1,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Leaving room",
    items: [
      {
        _id: 1,
        name: "clean floor",
        value: false,
      },
      {
        _id: 2,
        name: "cleaning the dust",
        value: false,
      },
    ],
  },
  {
    _id: 2,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Bed room",
    items: [
      {
        _id: 1,
        name: "clean floor",
        value: true,
      },
      {
        _id: 2,
        name: "make bed",
        value: false,
      },
    ],
  },

  {
    _id: 3,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Buttler",
    items: [
      {
        _id: 1,
        name: "turkey",
        value: false,
      },
      {
        _id: 2,
        name: "Chickens' Legs",
        value: false,
      },
    ],
  },
  {
    _id: 4,
    fk_userid: 1,
    fk_cardid: 11,
    title: "Cleaning",
    items: [
      {
        _id: 1,
        name: "detergente loiça",
        value: true,
      },
      {
        _id: 2,
        name: "Vassoura",
        value: false,
      },
    ],
  },
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
      return _.unionBy([action.payload], state, "_id");
    },
    removeChecklist: (state, action) => {
      const checklistId = action.payload;
      return _.reject(state, (checklist) => {
        return checklist._id === checklistId;
      });
    },
  },

  extraReducers: {},
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
