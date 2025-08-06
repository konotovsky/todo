import { useTodosDispatch } from "./TodosProvider";
import { TodoStats } from "./TodoStats";

export function TodoFooter({ id }) {
  const dispatch = useTodosDispatch();

  const handleAddTodoClick = () => {
    dispatch({ type: "ADD_TODO_ITEM", cardId: id });
  };

  return (
    <div className="relative flex rounded-b-2xl bg-red-400 p-5">
      <button
        onClick={handleAddTodoClick}
        type="button"
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full border-4 border-white bg-red-400 font-mono text-xl text-white transition-colors hover:bg-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </button>
      <TodoStats id={id} />
    </div>
  );
}
