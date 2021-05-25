import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import userLoggedInReducer from "./userLoggedInSlice";
// import boardsReducer from "./boardsSlice";
import listsReducer from "./listsSlice";
import cardsReducer from "./cardsSlice";
import checklistsReducer from "./checklistsSlice";
import checklistsItemsReducer from "./checklistsItemsSlice";

const rootReducer = combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  checklists: checklistsReducer,
  checklistsItems: checklistsItemsReducer
});

const rootStore = configureStore({
  reducer: rootReducer
});

export default rootStore;
