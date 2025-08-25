import { useSelector, useDispatch } from "react-redux";
import {
  selectTodoCardById,
  toggledTodoListItem,
  editedTodoListItemValue,
  removedTodoListItem,
} from "../features/todoCards/todoCardsSlice";
import clsx from "clsx";
import { useState } from "react";
import { colorMap } from "../app/colorMap";

export function TodoItem({ cardId, id }) {
  const todoCard = useSelector((state) => selectTodoCardById(state, cardId));
  const dispatch = useDispatch();

  const { isEdit, color } = todoCard;
  const colorClasses = colorMap[color] || {};

  const todoItem = todoCard.todoItems.find((todoItem) => todoItem.id === id);
  const { value, isDone } = todoItem;

  const [draftValue, setDraftValue] = useState(value);

  const handleToggleTodoItemChange = () => {
    dispatch(toggledTodoListItem({ cardId, id }));
  };

  const handleConfirmEditTodoItemValueBlur = () => {
    let newValue = draftValue.trim();
    if (newValue.length < 1) {
      newValue = "New task";
      if (!isEdit) {
        setDraftValue(newValue);
      }
    }

    dispatch(editedTodoListItemValue({ cardId, id, value: newValue }));
  };

  const handleDeleteTodoItemClick = () => {
    dispatch(removedTodoListItem({ cardId, id }));
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
            `border-${color}`,
            isDone && colorClasses.bg,
          )}
          checked={isDone}
          onChange={handleToggleTodoItemChange}
        />

        {isEdit ? (
          <>
            <input
              type="text"
              value={draftValue}
              onChange={(e) => setDraftValue(e.target.value)}
              onBlur={handleConfirmEditTodoItemValueBlur}
              className="w-full text-sm text-gray-600 outline-0"
              placeholder="Enter your task"
              autoFocus
            />
            <button
              type="button"
              onClick={handleDeleteTodoItemClick}
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
