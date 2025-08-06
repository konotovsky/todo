import { useTodos } from "./TodosProvider";

export function TodoStats({ id }) {
  const todos = useTodos();
  const todo = todos.find((todo) => todo.id === id);
  const completedCount = todo?.items.filter((item) => item.isDone).length ?? 0;
  const totalCount = todo?.items.length ?? 0;

  return (
    <div className="text-xs text-white">
      Completed: {completedCount}/{totalCount}
    </div>
  );
}
