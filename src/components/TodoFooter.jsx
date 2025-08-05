import { useTodos, useTodosDispatch } from "./TodosProvider";

export function TodoFooter({ id }) {
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const todo = todos.find((todo) => todo.id === id);
  const completedCount = todo?.items.filter((item) => item.isDone).length ?? 0;
  const totalCount = todo?.items.length ?? 0;

  const handleAddTodoClick = () => {
    dispatch({ type: "ADD_TODO_ITEM", cardId: id });
  };

  return (
    <div className="relative flex rounded-b-2xl bg-red-400 p-5">
      <button
        onClick={handleAddTodoClick}
        type="button"
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full border-4 border-white bg-red-400 font-mono text-xl text-white"
      >
        +
      </button>
      <div className="text-xs text-white">
        Completed: {completedCount}/{totalCount}
      </div>
    </div>
  );
}
