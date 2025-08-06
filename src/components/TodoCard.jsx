import { TodoFooter } from "./TodoFooter";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";

export function TodoCard({ id, title, isEdit, items }) {
  return (
    <div className="flex max-h-80 min-h-80 w-80 flex-col rounded-2xl bg-white shadow-xl">
      <TodoHeader id={id} title={title} isEdit={isEdit} />
      <TodoList id={id} items={items} isEdit={isEdit} />
      <TodoFooter id={id} isEdit={isEdit} />
    </div>
  );
}
