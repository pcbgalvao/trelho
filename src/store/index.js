import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userLoggedInReducer from "./userLoggedInSlice";
import boardsReducer from "./boardsSlice";
import listsReducer from "./listsSlice";
import cardsReducer from "./cardsSlice";
import checklistsReducer from "./checklistsSlice"

const rootReducer = combineReducers({
  userLoggedIn: userLoggedInReducer,
  boards: boardsReducer,
  lists: listsReducer,
  checklistsSlice: checklistsReducer,
  cards: cardsReducer,
});

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
