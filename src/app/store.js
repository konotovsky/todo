import { configureStore } from "@reduxjs/toolkit";
import todoCardsReducer from "../features/todoCards/todoCardsSlice";

export const store = configureStore({
  reducer: {
    todoCards: todoCardsReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("todoCards", JSON.stringify(store.getState().todoCards));
});
