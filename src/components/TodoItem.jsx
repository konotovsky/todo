import { useState } from "react";
import { useTodosDispatch } from "./TodosProvider";

export function TodoItem({
  itemValue,
  itemIsDone,
  cardId,
  itemId,
  cardIsEdit,
}) {
  const [editItemValue, setEditItemValue] = useState(itemValue);
  const dispatch = useTodosDispatch();

  const handleToggleChange = (cardId, itemId) => {
    dispatch({
      type: "TOGGLE_TODO_ITEM",
      cardId: cardId,
      itemId: itemId,
    });
  };

  const handleUpdateChange = (cardId, itemId, editItemValue) => {
    let value = editItemValue.trim();

    if (value.length < 1) {
      value = "New Item";
      setEditItemValue(value);
    }

    dispatch({
      type: "EDIT_TODO_ITEM_VALUE",
      cardId: cardId,
      itemId: itemId,
      value: value,
    });
  };

  const handleDeleteClick = (cardId, itemId) => {
    dispatch({ type: "REMOVE_TODO_ITEM", cardId: cardId, itemId: itemId });
  };

  return (
    <li className="border-b-1 border-gray-100 py-2">
      {cardIsEdit ? (
        <label className="flex cursor-pointer items-center gap-2 text-sm break-words hyphens-auto text-red-400">
          <input
            type="checkbox"
            className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-red-200 checked:bg-red-400"
            checked={itemIsDone}
            onChange={() => handleToggleChange(cardId, itemId)}
          ></input>
          <input
            type="text"
            value={editItemValue}
            className="w-full text-sm text-gray-600 outline-0"
            onChange={(e) => setEditItemValue(e.target.value)}
            onBlur={() => handleUpdateChange(cardId, itemId, editItemValue)}
          ></input>
          <button
            type="button"
            onClick={() => handleDeleteClick(cardId, itemId)}
            className="cursor-pointer"
          >
            ➖
          </button>
        </label>
      ) : (
        <label className="flex cursor-pointer items-center gap-2 text-sm break-words hyphens-auto text-red-400">
          <input
            type="checkbox"
            className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-red-200 checked:bg-red-400"
            checked={itemIsDone}
            onChange={() => handleToggleChange(cardId, itemId)}
          ></input>
          {itemValue}
        </label>
      )}
    </li>
  );
}
