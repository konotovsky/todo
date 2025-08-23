import { createSlice } from "@reduxjs/toolkit";

const todoCardsFromLocalStorage = localStorage.getItem("todoCards");
const initialState = todoCardsFromLocalStorage
  ? JSON.parse(todoCardsFromLocalStorage)
  : [];

export const todoCardsSlice = createSlice({
  name: "todoCards",
  initialState,
  reducers: {},
});

export default todoCardsSlice.reducer;
