export function TodoItem({ itemValue, itemIsDone }) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={itemIsDone}></input>
        {itemValue}
      </label>
    </li>
  );
}
