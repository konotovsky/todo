import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoCardsFromLocalStorage = localStorage.getItem("todoCards");
const initialState = todoCardsFromLocalStorage
  ? JSON.parse(todoCardsFromLocalStorage)
  : [];

export const todoCardsSlice = createSlice({
  name: "todoCards",
  initialState,
  reducers: {
    addedTodoCard: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: () => {
        const id = nanoid();

        return {
          payload: {
            id,
            title: "",
            color: "red",
            isEdit: true,
            todoItems: [],
          },
        };
      },
    },
  },
  selectors: {
    selectTodoCards: (todoCardsState) => todoCardsState,
    selectTodoCardById: (todoCardsState, id) => {
      return todoCardsState.find((todoCard) => todoCard.id === id);
    },
  },
});

export const { addedTodoCard } = todoCardsSlice.actions;

export const { selectTodoCards, selectTodoCardById } = todoCardsSlice.selectors;

export default todoCardsSlice.reducer;
