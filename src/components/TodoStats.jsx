import { useSelector } from "react-redux";
import {
  selectTodoCardCompletedCount,
  selectTodoCardTotalCount,
} from "../features/todoCards/todoCardsSlice";

export function TodoStats({ id }) {
  const completedCount = useSelector((state) =>
    selectTodoCardCompletedCount(state, id),
  );

  const totalCount = useSelector((state) =>
    selectTodoCardTotalCount(state, id),
  );

  return (
    <div className="text-xs text-white">
      Completed: {completedCount}/{totalCount}
    </div>
  );
}
