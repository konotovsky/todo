import { useTodosDispatch } from "./TodosProvider";

export function TodoHeader({ cardId, cardTitle }) {
  const dispatch = useTodosDispatch();

  const handleRemoveClick = (cardId) => {
    dispatch({ type: "REMOVE_TODO_CARD", id: cardId });
  };

  return (
    <div className="flex justify-between p-5">
      <h3 className="truncate border-b-1 border-gray-100 text-xl font-bold">
        {cardTitle}
      </h3>
      <div className="flex gap-2 border-b-1 border-transparent">
        <button type="button" className="cursor-pointer">
          ✏️
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
