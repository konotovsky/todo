import { memo } from "react";
import { TodoFooter } from "./TodoFooter";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";

export const TodoCard = memo(({ id }) => {
  return (
    <div className="flex max-h-80 min-h-80 w-80 flex-col rounded-2xl bg-white shadow-xl">
      <TodoHeader id={id} />
      <TodoList id={id} />
      <TodoFooter id={id} />
    </div>
  );
});
