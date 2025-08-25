import clsx from "clsx";
import { colorMap } from "../app/colorMap";
import { useSelector, useDispatch } from "react-redux";
import {
  editedTodoCardColor,
  selectTodoCardById,
} from "../features/todoCards/todoCardsSlice";

export function TodoColor({ id }) {
  const todoCard = useSelector((state) => selectTodoCardById(state, id));
  const dispatch = useDispatch();

  const { isEdit } = todoCard;
  const availableColors = isEdit ? Object.keys(colorMap) : [];

  const handleColorClick = (color) => {
    dispatch(editedTodoCardColor({ id, color }));
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
