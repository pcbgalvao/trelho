import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import cardsRestApi from "../restapis/cardsRestApi";
// import cardsRestApi from "../restApi/cardsRestApi";
import CONSTANTS from "../constants";

const fetchCards = createAsyncThunk(
  "/cards/fetchCards",
  async ( searchFields ) => {
    const response = await cardsRestApi.getCards(searchFields);
    return response;
  }
);

const createCard = createAsyncThunk("/cards/createCard", async (cardForm) => {
  const response = await cardsRestApi.createCard(cardForm);
  return response;
});

const renameFieldCard = createAsyncThunk(
  "/cards/renameFieldCard",
  async (cardForm) => {
    const response = await cardsRestApi.renameFieldCard(cardForm);
    return response;
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    updateCard: (state, action) => {
      let newCard = action.payload;
      return _.unionBy([newCard], state, "_id");
    },
    setCardTitle: (state, action) => {
      let newCard = action.payload;
      return _.unionBy([newCard], state, "_id");
    },
  },
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      return [...state, ...action.payload];
    },
    [createCard.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
    [renameFieldCard.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const selectcardName = (state) => {
  console.log("state-", state);
  return state.cards.cardname;
};

export const selectLists = (state) => state.cards.lists;
export const { setCardTitle, updateCard } = cardsSlice.actions;
//### Reducers

export default cardsSlice.reducer;
export { fetchCards, createCard, renameFieldCard };
