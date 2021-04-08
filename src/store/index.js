import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userLoggedInReducer from "./userLoggedInSlice";
import boardsReducer from "./boardsSlice";
import listsReducer from "./listsSlice";
import cardsReducer from "./cardsSlice";
import cardCheckListsReducer from "./cardCheckListsSlice";

const rootReducer = combineReducers({
  userLoggedIn: userLoggedInReducer,
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
  cardCheckLists: cardCheckListsReducer
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
