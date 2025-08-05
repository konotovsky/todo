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
            id={todo.id}
            title={todo.title}
            isEdit={todo.isEdit}
            items={todo.items}
          />
        );
      })}
      <TodoCardAddButton />
    </div>
  );
}
