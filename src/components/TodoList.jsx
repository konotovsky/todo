import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodoCardById } from "../features/todoCards/todoCardsSlice";

export function TodoList({ id }) {
  const todoCard = useSelector((state) => selectTodoCardById(state, id));
  const items = todoCard.items;

  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto px-5">
      <ul>
        {items &&
          items.map((item) => {
            return <TodoItem key={item.id} cardId={id} id={item.id} />;
          })}
      </ul>
    </div>
  );
}
