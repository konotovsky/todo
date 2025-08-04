import { useState } from "react";
import { useTodosDispatch } from "./TodosProvider";

export function TodoHeader({ cardId, cardTitle, cardIsEdit }) {
  const [editTitle, setEditTitle] = useState(cardTitle);
  const dispatch = useTodosDispatch();

  const handleEditClick = (cardId) => {
    dispatch({ type: "EDIT_TODO_CARD", id: cardId });
  };

  const handleUpdateClick = (cardId) => {
    dispatch({ type: "EDIT_TODO_CARD_TITLE", id: cardId, title: editTitle });
  };

  const handleRemoveClick = (cardId) => {
    dispatch({ type: "REMOVE_TODO_CARD", id: cardId });
  };

  return (
    <div className="flex justify-between p-5">
      <h3 className="truncate border-b-1 border-gray-100 text-xl font-bold text-red-400">
        {cardIsEdit ? (
          <input
            type="text"
            value={editTitle}
            className="w-full text-xl font-bold text-gray-600 outline-0"
            onChange={(e) => setEditTitle(e.target.value)}
          ></input>
        ) : (
          cardTitle
        )}
      </h3>
      <div className="flex gap-2 border-b-1 border-transparent">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            if (cardIsEdit) {
              handleUpdateClick(cardId);
            } else {
              handleEditClick(cardId);
            }
          }}
        >
          {cardIsEdit ? "✔️" : "✏️"}
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleRemoveClick(cardId)}
        >
          ✖
        </button>
      </div>
    </div>
  );
}
