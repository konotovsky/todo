import { useSelector } from "react-redux";
import { TodoCard } from "./TodoCard";
import { TodoCardAddButton } from "./TodoCardAddButton";
import { selectTodoCards } from "../features/todoCards/todoCardsSlice";

export const TodoBoard = () => {
  const todoCards = useSelector(selectTodoCards);

  return (
    <div className="flex flex-wrap content-start items-stretch justify-center gap-4 p-4">
      {todoCards.map((todo) => (
        <TodoCard key={todo.id} id={todo.id} />
      ))}
      <TodoCardAddButton />
    </div>
  );
};
