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
      setEditValue(trimmed);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
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
              onKeyDown={handleKeyDown}
              className="w-full text-sm text-gray-600 outline-0"
            />
            <button
              type="button"
              onClick={deleteItem}
              className="cursor-pointer"
            >
              ➖
            </button>
          </>
        ) : (
          <span>{value}</span>
        )}
      </label>
    </li>
  );
}
