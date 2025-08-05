import { useTodosDispatch } from "./TodosProvider";

export function TodoCardAddButton() {
  const dispatch = useTodosDispatch();

  const handleAddClick = () => {
    dispatch({ type: "ADD_TODO_CARD" });
  };

  return (
    <button
      type="button"
      onClick={handleAddClick}
      className="fixed right-5 bottom-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-md shadow-black transition-colors hover:bg-gray-800"
    >
      <span className="font-mono text-2xl leading-none">+</span>
    </button>
  );
}
