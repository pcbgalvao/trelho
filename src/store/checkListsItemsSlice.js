import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardsRestApi from "../restApi/cardsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = [
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "clean floor",
    value: false,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "cleaning the dust",
    value: false,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "clean floor",
    value: true,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "make bed",
    value: false,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "turkey",
    value: false,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "Chickens' Legs",
    value: false,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "detergente loiça",
    value: true,
  },
  {
    id: 1,
    fk_userid: 1,
    fk_checklistid: 1,
    name: "Vassoura",
    value: false,
  },
];

const checklistsItemsSlice = createSlice({
  name: "selectedChecklist",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedChecklist(state, action) {
      return action.payload;
    },
    setSelectedTitle: (state, action) => {
      return { ...state, title: action.payload };
    },
    addItemToChecklist: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    renameItemToChecklist: (state, action) => {
      return (state.title = action.description);
    },
    deleteItemToChecklist: (state, action) => {
      return (state.title = action.description);
    },
  },
});

export const {
  setSelectedChecklist,
  setSelectedTitle,
  renameItemToChecklist,
} = selectedChecklistSlice.actions;
export default selectedChecklistSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardChecklistsRestApi from "../restApi/cardChecklistsRestApi";
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

export const cardChecklistsSlice = createSlice({
  name: "cardChecklists",
  initialState: INITIAL_STATE,
  reducers: {
    setCardChecklist: (state, action) => {
      return state;
    },
    updateChecklistItem: (state, action) => {
      return { ...state };
    },
  },

  extraReducers: {},
});

export const selectcardName = (state) => {
  console.log("state-", state);
  return state.cardChecklists.cardname;
};
export const selectLists = (state) => state.cardChecklists.lists;

export const {
  updateChecklistItem,
  setCardChecklist,
} = cardChecklistsSlice.actions;

// ### Reducers
//
export default cardChecklistsSlice.reducer;
