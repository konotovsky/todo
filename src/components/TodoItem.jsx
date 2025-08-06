import { useState } from "react";
import { useTodosDispatch } from "./TodosProvider";

export function TodoItem({ value, isDone, cardId, id, isEdit }) {
  const [editValue, setEditValue] = useState(value);
  const dispatch = useTodosDispatch();

  const toggleItem = () => {
    dispatch({
      type: "TOGGLE_TODO_ITEM",
      cardId,
      itemId: id,
    });
  };

  const updateItem = () => {
    let trimmed = editValue.trim();
    if (trimmed.length === 0) {
      trimmed = "New Item";

      if (!isEdit) {
        setEditValue(trimmed);
      }
    }

    dispatch({
      type: "EDIT_TODO_ITEM_VALUE",
      cardId,
      itemId: id,
      value: trimmed,
    });
  };

  const deleteItem = () => {
    dispatch({
      type: "REMOVE_TODO_ITEM",
      cardId,
      itemId: id,
    });
  };

  return (
    <li className="border-b border-gray-100 py-2">
      <label className="flex cursor-pointer items-center gap-2 text-sm break-words hyphens-auto text-red-400">
        <input
          type="checkbox"
          className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-red-200 checked:bg-red-400"
          checked={isDone}
          onChange={toggleItem}
        />

        {isEdit ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={updateItem}
              className="w-full text-sm text-gray-600 outline-0"
              placeholder="Enter your task"
              autoFocus
            />
            <button
              type="button"
              onClick={deleteItem}
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-red-400 transition-colors hover:text-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </>
        ) : (
          <span>{value}</span>
        )}
      </label>
    </li>
  );
}
