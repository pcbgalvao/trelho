import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

// import cardsRestApi from "../restApi/cardsRestApi";
import CONSTANTS from "../constants";

const INITIAL_STATE = [
  {
    _id: "1",
    fk_listid: "1",
    fk_userid: "1",
    title: "House Cleaning",
    creationTimestamp: 1619605503272,
    description: "Things I must do in each two weaks at the most"
  },
  {
    _id: "2",
    fk_listid: "2",
    fk_userid: "1",
    title: "supermaket",
    description: "food, hamers, ..."
  },
  {
    _id: "13",
    fk_listid: "3",
    fk_userid: "1",
    title: "Destinations",
    description: "Countries, Regions"
  }
];

const cardsSlice = createSlice({
  name: "cards",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCards(state, actions) {
      return state;
    },
    createCard: (state, action) => {
      const newCard = action.payload;
      newCard.creationtimestamp = Date.now();
      return [...state, newCard];
    },
    updateCard: (state, action) => {
      let newCard = action.payload;
      newCard.creationtimestamp = Date.now();

      return _.unionBy([newCard], state, "_id");
    },
    setCardTitle: (state, action) => {
      return _.unionBy([action.payload], state, "_id");
    }
  },
  extraReducers: {}
});

export const selectcardName = (state) => {
  console.log("state-", state);
  return state.cards.cardname;
};
export const selectLists = (state) => state.cards.lists;
export const {
  createCard,
  setCardTitle,
  updateCard,
  fetchCards
} = cardsSlice.actions;
//### Reducers

export default cardsSlice.reducer;
