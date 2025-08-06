import clsx from "clsx";
import { useTodosDispatch } from "./TodosProvider";
import { colorMap } from "./colorMap";

export function TodoColor({ id, isEdit }) {
  const dispatch = useTodosDispatch();
  const availableColors = isEdit ? Object.keys(colorMap) : [];

  const handleColorClick = (color) => {
    dispatch({ type: "EDIT_TODO_CARD_COLOR", id, color });
  };

  return (
    <div className="flex items-center gap-1">
      {availableColors.map((color, i) => (
        <button
          key={i}
          onClick={() => handleColorClick(color)}
          className={clsx(
            "h-4 w-4 cursor-pointer rounded-full border-2 border-white",
            colorMap[color]?.bg,
          )}
        />
      ))}
    </div>
  );
}
