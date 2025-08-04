import { TodoCard } from "./TodoCard";
import { TodoCardAddButton } from "./TodoCardAddButton";
import { useTodos } from "./TodosProvider";

export function TodoBoard() {
  const todos = useTodos();

  return (
    <div className="flex flex-wrap content-start items-stretch justify-center gap-4 p-4">
      {todos.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            cardId={todo.id}
            cardTitle={todo.title}
            cardItems={todo.items}
          />
        );
      })}
      <TodoCardAddButton />
    </div>
  );
}
