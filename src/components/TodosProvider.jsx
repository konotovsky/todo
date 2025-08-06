import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
  const init = () => {
    const todosFromStorage = localStorage.getItem("todos");
    return todosFromStorage ? JSON.parse(todosFromStorage) : [];
  };

  const [todos, dispatch] = useReducer(todosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
          title: "",
          isEdit: true,
          items: [],
        },
      ];
    }
    case "EDIT_TODO_CARD": {
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isEdit: !todo.isEdit } : todo,
      );
    }
    case "EDIT_TODO_CARD_TITLE": {
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
      return todos.map((todo) =>
        todo.id === action.cardId
          ? {
              ...todo,
              isEdit: true,
              items: [
                ...todo.items,
                { id: uuidv4(), value: "", isDone: false },
              ],
            }
          : todo,
      );
    }
    case "TOGGLE_TODO_ITEM": {
      return todos.map((todo) =>
        todo.id === action.cardId
          ? {
              ...todo,
              items: todo.items.map((item) =>
                item.id === action.itemId
                  ? { ...item, isDone: !item.isDone }
                  : item,
              ),
            }
          : todo,
      );
    }
    case "EDIT_TODO_ITEM_VALUE": {
      return todos.map((todo) =>
        todo.id === action.cardId
          ? {
              ...todo,
              items: todo.items.map((item) =>
                item.id === action.itemId
                  ? { ...item, value: action.value }
                  : item,
              ),
            }
          : todo,
      );
    }
    case "REMOVE_TODO_ITEM": {
      return todos.map((todo) =>
        todo.id === action.cardId
          ? {
              ...todo,
              items: todo.items.filter((item) => item.id !== action.itemId),
            }
          : todo,
      );
    }
    default:
      throw new Error("Unknown action: " + action.type);
  }
}
