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
      className="fixed right-5 bottom-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-1 border-gray-100 bg-black text-white shadow-md"
    >
      <span className="font-mono text-xl leading-none font-bold">+</span>
    </button>
  );
}
