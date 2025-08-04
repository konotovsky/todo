import { TodoFooter } from "./TodoFooter";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";

export function TodoCard({ cardId, cardTitle, cardIsEdit, cardItems }) {
  return (
    <div className="flex max-h-80 min-h-80 w-80 flex-col rounded-2xl bg-white shadow-xl">
      <TodoHeader
        cardId={cardId}
        cardTitle={cardTitle}
        cardIsEdit={cardIsEdit}
      />
      <TodoList cardId={cardId} cardItems={cardItems} cardIsEdit={cardIsEdit} />
      <TodoFooter cardId={cardId} />
    </div>
  );
}
