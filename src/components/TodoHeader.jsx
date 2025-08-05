import { useState } from "react";
import { useTodosDispatch } from "./TodosProvider";

export function TodoHeader({ id, title, isEdit }) {
  const [editTitle, setEditTitle] = useState(title);
  const dispatch = useTodosDispatch();

  const handleEditClick = () => {
    dispatch({ type: "EDIT_TODO_CARD", id });
  };

  const handleUpdateClick = () => {
    let title = editTitle.trim();

    if (title.length < 1) {
      title = "New Todo";
      setEditTitle(title);
    }

    dispatch({ type: "EDIT_TODO_CARD_TITLE", id, title: title });
  };

  const handleRemoveClick = () => {
    dispatch({ type: "REMOVE_TODO_CARD", id });
  };

  return (
    <div className="flex justify-between p-5">
      <h3 className="truncate border-b-1 border-gray-100 text-xl font-bold text-red-400">
        {isEdit ? (
          <input
            type="text"
            value={editTitle}
            className="w-full text-xl font-bold text-gray-600 outline-0"
            onChange={(e) => setEditTitle(e.target.value)}
          ></input>
        ) : (
          title
        )}
      </h3>
      <div className="flex gap-2 border-b-1 border-transparent">
        {isEdit ? (
          <button className="cursor-pointer" onClick={handleUpdateClick}>
            ✔️
          </button>
        ) : (
          <button className="cursor-pointer" onClick={handleEditClick}>
            ✏️
          </button>
        )}
        <button
          type="button"
          className="cursor-pointer"
          onClick={handleRemoveClick}
        >
          ✖
        </button>
      </div>
    </div>
  );
}
