import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodoCardById } from "../features/todoCards/todoCardsSlice";

export function TodoList({ id }) {
  const todoCard = useSelector((state) => selectTodoCardById(state, id));

  const { todoItems } = todoCard;

  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto px-5">
      <ul>
        {todoItems &&
          todoItems.map((todoItem) => {
            return <TodoItem key={todoItem.id} cardId={id} id={todoItem.id} />;
          })}
      </ul>
    </div>
  );
}
