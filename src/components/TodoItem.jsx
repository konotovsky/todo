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
    <li>
      <label>
        <input
          type="checkbox"
          checked={itemIsDone}
          onChange={() => handleToggleChange(cardId, itemId)}
        ></input>
        {itemValue}
      </label>
    </li>
  );
}
