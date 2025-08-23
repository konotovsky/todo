import { useSelector } from "react-redux";
import { selectTodoCardById } from "../features/todoCards/todoCardsSlice";

export function TodoStats({ id }) {
  const todoCard = useSelector((state) => selectTodoCardById(state, id));
  const completedCount =
    todoCard?.items?.filter((item) => item.isDone).length ?? 0;
  const totalCount = todoCard?.items?.length ?? 0;

  return (
    <div className="text-xs text-white">
      Completed: {completedCount}/{totalCount}
    </div>
  );
}
