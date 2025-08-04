import { TodoItem } from "./TodoItem";

export function TodoList({ cardItems }) {
  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto px-5">
      <ul>
        {cardItems.map((item) => {
          return (
            <TodoItem
              key={item.id}
              itemValue={item.value}
              itemIsDone={item.isDone}
            />
          );
        })}
      </ul>
    </div>
  );
}
