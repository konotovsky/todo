import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext value={todos}>
      <TodosDispatchContext value={dispatch}>{children}</TodosDispatchContext>
    </TodosContext>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO_CARD": {
      return [
        ...todos,
        {
          id: uuidv4(),
          title: "New Todo",
          isEdit: false,
          items: [],
        },
      ];
    }
    case "EDIT_TODO_CARD": {
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isEdit: !todo.isEdit,
          };
        }
        return todo;
      });
    }
    case "UPDATE_TODO_CARD": {
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, title: action.title, isEdit: false }
          : todo,
      );
    }
    case "REMOVE_TODO_CARD": {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case "ADD_TODO_ITEM": {
      return todos.map((todo) => {
        if (todo.id === action.cardId) {
          return {
            ...todo,
            items: [
              ...todo.items,
              {
                id: uuidv4(),
                value: "New Item",
                isDone: false,
              },
            ],
          };
        }
        return todo;
      });
    }
    case "TOGGLE_TODO_ITEM":
      return todos.map((todo) => {
        if (todo.id !== action.cardId) return todo;

        return {
          ...todo,
          items: todo.items.map((item) =>
            item.id === action.itemId
              ? { ...item, isDone: !item.isDone }
              : item,
          ),
        };
      });
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
