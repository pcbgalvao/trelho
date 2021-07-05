import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import userLoggedInReducer from "./userLoggedInSlice";
// import boardsReducer from "./boardsSlice";
import listsReducer from "./listsSlice";
import cardsReducer from "./cardsSlice";
import checklistsReducer from "./checklistsSlice";
import checklistItemsReducer from "./checklistItemsSlice";

const rootReducer = combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  checklists: checklistsReducer,
  checklistItems: checklistItemsReducer
});

const rootStore = configureStore({
  reducer: rootReducer
});

export default rootStore;
