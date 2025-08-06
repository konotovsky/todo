import { useTodos, useTodosDispatch } from "./TodosProvider";

export function TodoCardAddButton() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const isEdit = todos.find((todo) => todo.isEdit);

  const handleAddClick = () => {
    dispatch({ type: "ADD_TODO_CARD" });
  };

  return (
    !isEdit && (
      <button
        type="button"
        onClick={handleAddClick}
        className="fixed right-5 bottom-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-md shadow-black transition-colors hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    )
  );
}
