import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardsRestApi from "../restApi/cardsRestApi";
import CONSTANTS from "../constants";

const INITIAL_STATE = [
  {
    _id: "1",
    fk_userid: "1",
    fk_checklistid: "1",
    name: "clean floor",
    value: false
  },
  {
    _id: "2",
    fk_userid: "1",
    fk_checklistid: "1",
    name: "cleaning the dust",
    value: false
  },
  {
    _id: "3",
    fk_userid: "1",
    fk_checklistid: "1",
    name: "clean floor",
    value: true
  },
  {
    _id: "4",
    fk_userid: "1",
    fk_checklistid: "1",
    name: "make bed",
    value: false
  },
  {
    _id: "5",
    fk_userid: "1",
    fk_checklistid: "1",
    name: "turkey",
    value: false
  },
  {
    _id: "6",
    fk_userid: "1",
    fk_checklistid: "2",
    name: "Chickens' Legs",
    value: false
  },
  {
    _id: "7",
    fk_userid: "1",
    fk_checklistid: "2",
    name: "detergente loiça",
    value: true
  },
  {
    _id: "8",
    fk_userid: "1",
    fk_checklistid: "1",
    name: "Vassoura",
    value: false
  }
];

const checklistsItemsSlice = createSlice({
  name: "selectedChecklist",
  initialState: INITIAL_STATE,
  reducers: {
    createChecklistItem(state, action) {
      return [...state, action.payload]
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
    }
  }
});

export const {
  createChecklistItem,
  setSelectedTitle,
  renameItemToChecklist
} = checklistsItemsSlice.actions;
export default checklistsItemsSlice.reducer;
