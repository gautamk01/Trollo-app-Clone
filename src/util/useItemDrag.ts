import { useDrag } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { setDraggedItem } from "../state/action";
import { DragItem } from "../DragItem";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState(); //using dispatch

  /**
   * const [ref,drag] = useDrag({type: Specific component to drag,
   * item:when the item is in Drag,
   * end: when it is dropped  })
   */
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item)); //setDraggedItem({ type: "COLUMN", id, text })
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  return { drag };
};
