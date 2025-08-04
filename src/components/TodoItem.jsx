import { useTodosDispatch } from "./TodosProvider";

export function TodoItem({ itemValue, itemIsDone, cardId, itemId }) {
  const dispatch = useTodosDispatch();

  const handleToggleChange = (cardId, itemId) => {
    dispatch({
      type: "TOGGLE_TODO_ITEM",
      cardId: cardId,
      itemId: itemId,
    });
  };

  return (
    <li className="border-b-1 border-gray-100 py-2">
      <label className="flex cursor-pointer items-center gap-2 text-sm break-words hyphens-auto">
        <input
          type="checkbox"
          className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-red-200 checked:bg-red-400"
          checked={itemIsDone}
          onChange={() => handleToggleChange(cardId, itemId)}
        ></input>
        {itemValue}
      </label>
    </li>
  );
}
