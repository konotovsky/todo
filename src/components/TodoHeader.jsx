import { useSelector, useDispatch } from "react-redux";
import { selectTodoCardById } from "../features/todoCards/todoCardsSlice";
import {
  removedTodoCard,
  editedTodoCard,
  editedTodoCardTitle,
} from "../features/todoCards/todoCardsSlice";
import { useState } from "react";
import clsx from "clsx";
import { colorMap } from "../app/colorMap";

export function TodoHeader({ id }) {
  const todoCard = useSelector((state) => selectTodoCardById(state, id));
  const dispatch = useDispatch();

  const { title, isEdit, color } = todoCard;
  const colorClasses = colorMap[color] || {};

  const [draftTitle, setDraftTitle] = useState(title);

  const handleEditClick = () => {
    dispatch(editedTodoCard(id));
  };

  const handleConfirmEditClick = () => {
    let newTitle = draftTitle.trim();
    if (newTitle.length < 1) {
      newTitle = "New Todo Card";
      if (!isEdit) {
        setDraftTitle(newTitle);
      }
    }

    dispatch(editedTodoCardTitle({ id, title: newTitle }));
  };

  const handleRemoveClick = () => {
    dispatch(removedTodoCard(id));
  };

  return (
    <div className="flex justify-between p-5">
      <h3
        className={clsx(
          "truncate border-b-1 border-gray-100 text-xl font-bold",
          colorClasses.text,
        )}
      >
        {isEdit ? (
          <input
            type="text"
            value={draftTitle}
            className="w-full text-xl font-bold text-gray-600 outline-0"
            onChange={(e) => setDraftTitle(e.target.value)}
            placeholder="Enter your Todo title"
            autoFocus
          />
        ) : (
          title
        )}
      </h3>

      <div className="flex gap-2 border-b-1 border-transparent">
        {isEdit ? (
          <button className="cursor-pointer" onClick={handleConfirmEditClick}>
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
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button className="cursor-pointer" onClick={handleEditClick}>
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
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          </button>
        )}

        <button
          type="button"
          className="cursor-pointer"
          onClick={handleRemoveClick}
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
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
