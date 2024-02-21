import { useRef } from "react";
import { AddNewButton } from "./AddnewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { moveList, addTask, updateList } from "./state/action";
import {
  CloseButton,
  ColumnContainer,
  ColumnTitle,
  ListCardHeader,
} from "./styled";
import { useItemDrag } from "./util/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./util/isHidden";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch, getListDelete, draggedItem } =
    useAppState();
  const task = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  //Dragging the item
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  //Dropping the Item

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      //If there's currently no item being dragged, exit the function.
      if (!draggedItem) {
        return;
      }
      //Check if the dragged item is a "COLUMN" type.
      if (draggedItem.type === "COLUMN") {
        //f the dragged item's ID matches the ID of the current drop target, exit (you don't want elements dropping on themselves).
        if (draggedItem.id === id) {
          return;
        }
        // If all conditions pass,
        // dispatch the moveList action.
        // This likely triggers state changes related to rearranging the column order.
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });
  drag(drop(ref));

  return (
    <ColumnContainer ref={ref} ishidden={isHidden(draggedItem, "COLUMN", id)}>
      <ListCardHeader>
        <ColumnTitle>{text}</ColumnTitle>
        <CloseButton
          $color="green"
          onClick={() => {
            dispatch(updateList(getListDelete(id)));
          }}
        >
          x
        </CloseButton>
      </ListCardHeader>

      {task.map((list) => (
        <Card listid={id} id={list.id} key={list.id} text={list.text} />
      ))}
      <AddNewButton
        onAddupper={(text) => {
          // children to parent props extange

          dispatch(addTask(text, id));
        }}
        toggleButtonText="+ Add New Card"
        ColorDark="true"
      />
    </ColumnContainer>
  );
};
