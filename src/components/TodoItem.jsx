import clsx from "clsx";
import { useState } from "react";
import { useTodos, useTodosDispatch } from "./TodosProvider";
import { colorMap } from "./colorMap";

export function TodoItem({ value, isDone, cardId, id, isEdit }) {
  const [editValue, setEditValue] = useState(value);
  const dispatch = useTodosDispatch();
  const todos = useTodos();

  const currentColor = todos.find((todo) => todo.id === cardId)?.color;
  const colorClasses = colorMap[currentColor] || {};

  const toggleItem = () => {
    dispatch({
      type: "TOGGLE_TODO_ITEM",
      cardId,
      itemId: id,
    });
  };

  const updateItem = () => {
    let trimmed = editValue.trim();
    if (trimmed.length < 1) {
      trimmed = "New task";
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
      <label
        className={clsx(
          "flex cursor-pointer items-center gap-2 text-sm break-words hyphens-auto",
          colorClasses.text,
        )}
      >
        <input
          type="checkbox"
          className={clsx(
            "h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2",
            `border-${currentColor}`,
            isDone && colorClasses.bg,
          )}
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
                className={clsx(
                  "size-5 transition-colors",
                  colorClasses.text,
                  colorClasses.hoverText,
                )}
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
