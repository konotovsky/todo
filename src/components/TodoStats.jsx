import { useSelector } from "react-redux";
import {
  selectTodoItemsCompletedCount,
  selectTodoItemsTotalCount,
} from "../features/todoCards/todoCardsSlice";

export function TodoStats({ id }) {
  const completedCount = useSelector((state) =>
    selectTodoItemsCompletedCount(state, id),
  );

  const totalCount = useSelector((state) =>
    selectTodoItemsTotalCount(state, id),
  );

  return (
    <div className="text-xs text-white">
      Completed: {completedCount}/{totalCount}
    </div>
  );
}
