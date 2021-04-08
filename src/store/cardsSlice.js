import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardsRestApi from "../restApi/cardsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = [
  {
    "_id": 11,
    "fk_listid": 1,
    "fk_userid": 1,
    "title": "House Cleaning",
    "description": "Things I must do in each two weaks at the most"
  },
  {
    "_id": 12,
    "fk_listid": 2,
    "fk_userid": 1,
    "title": "supermaket",
    "description": "food, hamers, ..."
  },
  {
    "_id": 13,
    "fk_listid": 3,
    "fk_userid": 1,
    "title": "Destinations",
    "description": "Countries, Regions"
  }
]


const cardsSlice = createSlice({
  name: "cards",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCards(state, actions) {
      return state;
    },
  },
  extraReducers: {},
});

export const selectcardName = (state) => {
  console.log("state-", state);
  return state.cards.cardname;
};
export const selectLists = (state) => state.cards.lists;
export const { fetchCards } = cardsSlice.actions;
// ### Reducers
//
export default cardsSlice.reducer;
