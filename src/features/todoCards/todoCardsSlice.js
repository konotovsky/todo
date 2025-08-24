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
    removedTodoCard: (state, action) => {
      const index = state.findIndex(
        (todoCard) => todoCard.id === action.payload,
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    editedTodoCard: (state, action) => {
      const todoCard = state.find((todoCard) => todoCard.id === action.payload);

      if (todoCard) {
        todoCard.isEdit = !todoCard.isEdit;
      }
    },
    editedTodoCardTitle: (state, action) => {
      const todoCard = state.find(
        (todoCard) => todoCard.id === action.payload.id,
      );

      if (todoCard) {
        todoCard.title = action.payload.title;
        todoCard.isEdit = false;
      }
    },
    editedTodoCardColor: (state, action) => {
      const todoCard = state.find(
        (todoCard) => todoCard.id === action.payload.id,
      );

      if (todoCard) {
        todoCard.color = action.payload.color;
      }
    },
    addedTodoListItem: {
      reducer: (state, action) => {
        const todoCard = state.find(
          (todoCard) => todoCard.id === action.payload.id,
        );

        if (todoCard) {
          todoCard.isEdit = true;
          todoCard.todoItems.push(action.payload.item);
        }
      },
      prepare: (id) => {
        return {
          payload: {
            id,
            item: {
              id: nanoid(),
              value: "",
              isDone: false,
            },
          },
        };
      },
    },
    toggledTodoListItem: (state, action) => {
      const todoCard = state.find(
        (todoCard) => todoCard.id === action.payload.cardId,
      );

      if (todoCard) {
        const todoItem = todoCard.todoItems.find(
          (todoItem) => todoItem.id === action.payload.id,
        );

        if (todoItem) {
          todoItem.isDone = !todoItem.isDone;
        }
      }
    },
    editedTodoListItemValue: (state, action) => {
      const todoCard = state.find(
        (todoCard) => todoCard.id === action.payload.cardId,
      );

      if (todoCard) {
        const todoItem = todoCard.todoItems.find(
          (todoItem) => todoItem.id === action.payload.id,
        );

        if (todoItem) {
          todoItem.value = action.payload.value;
        }
      }
    },
    removedTodoListItem: (state, action) => {
      const todoCard = state.find(
        (todoCard) => todoCard.id === action.payload.cardId,
      );

      if (todoCard) {
        todoCard.todoItems = todoCard.todoItems.filter(
          (todoItem) => todoItem.id !== action.payload.id,
        );
      }
    },
  },
  selectors: {
    selectTodoCards: (todoCardsState) => todoCardsState,
    selectTodoCardById: (todoCardsState, id) => {
      return todoCardsState.find((todoCard) => todoCard.id === id);
    },
    selectTodoCardCompletedCount: (todoCardsState, id) => {
      const todoCard = todoCardsState.find((todoCard) => todoCard.id === id);

      return todoCard
        ? todoCard.todoItems.filter((todoItem) => todoItem.isDone).length
        : 0;
    },
    selectTodoCardTotalCount: (todoCardsState, id) => {
      const todoCard = todoCardsState.find((todoCard) => todoCard.id === id);

      return todoCard ? todoCard.todoItems.length : 0;
    },
  },
});

export const {
  addedTodoCard,
  removedTodoCard,
  editedTodoCard,
  editedTodoCardTitle,
  editedTodoCardColor,
  addedTodoListItem,
  toggledTodoListItem,
  editedTodoListItemValue,
  removedTodoListItem,
} = todoCardsSlice.actions;

export const {
  selectTodoCards,
  selectTodoCardById,
  selectTodoCardCompletedCount,
  selectTodoCardTotalCount,
} = todoCardsSlice.selectors;

export default todoCardsSlice.reducer;
