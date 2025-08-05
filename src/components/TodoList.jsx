import { TodoItem } from "./TodoItem";

export function TodoList({ id, items, isEdit }) {
  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto px-5">
      <ul>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              value={item.value}
              isDone={item.isDone}
              cardId={id}
              id={item.id}
              isEdit={isEdit}
            />
          );
        })}
      </ul>
    </div>
  );
}
