import { useTodosDispatch } from "./TodosProvider";

export function TodoFooter({ cardId }) {
  const dispatch = useTodosDispatch();

  const handleAddTodoClick = (cardId) => {
    dispatch({ type: "ADD_TODO_ITEM", cardId: cardId });
  };

  return (
    <div className="relative flex justify-between rounded-b-2xl bg-red-400 p-5">
      <button
        onClick={() => handleAddTodoClick(cardId)}
        type="button"
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full border-4 border-white bg-red-400 text-2xl font-bold text-white"
      ></button>
    </div>
  );
}
