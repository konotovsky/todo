import clsx from "clsx";
import { colorMap } from "./colorMap";
import { TodoColor } from "./TodoColor";
import { useTodos, useTodosDispatch } from "./TodosProvider";
import { TodoStats } from "./TodoStats";

export function TodoFooter({ id, isEdit }) {
  const dispatch = useTodosDispatch();
  const todos = useTodos();

  const currentColor = todos.find((todo) => todo.id === id)?.color;
  const colorClasses = colorMap[currentColor] || {};

  const handleAddTodoClick = () => {
    dispatch({ type: "ADD_TODO_ITEM", cardId: id });
  };

  return (
    <div
      className={clsx(
        "relative flex items-center justify-between rounded-b-2xl p-5",
        colorClasses.bg,
      )}
    >
      <button
        onClick={handleAddTodoClick}
        type="button"
        className={clsx(
          "absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full border-4 border-white font-mono text-xl text-white transition-colors",
          colorClasses.bg,
          colorClasses.hoverBg,
        )}
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
      <TodoColor id={id} isEdit={isEdit} />
    </div>
  );
}
