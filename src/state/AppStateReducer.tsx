import { findItemIndexById, moveItem } from "../util/arrayList";
import { Action } from "./action";
import { nanoid } from "nanoid";
import { DragItem } from "../DragItem";
//Data Type for ** Task ** => id,text
export type Task = {
  id: string;
  text: string;
};
// Data-Type for **List** => id,text,task
export type List = {
  id: string;
  text: string;
  task: Task[];
};

// Data-Type for **AppState** => Collection of Lists
export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (
  state: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST":
      state.lists.push({ id: nanoid(), text: action.payload, task: [] });
      break;
    //we need make sure about the List that is appropriate for the List
    case "ADD_TASK":
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);
      state.lists[targetListIndex].task.push({ id: nanoid(), text });
      console.log(targetListIndex);
      break;
    case "UPDATE_LIST":
      state.lists = action.payload.lists;
      break;
    case "REMOVE_TASK":
      const { task, list } = action.payload;
      const targetLIndex = findItemIndexById(state.lists, list);
      const targetTaskIndex = state.lists[targetLIndex].task.findIndex(
        (t) => t.id === task
      );
      if (targetTaskIndex !== -1) {
        // Remove the task if found
        state.lists[targetLIndex].task.splice(targetTaskIndex, 1);
      }
      break;
    case "MOVE_LIST":
      const { draggedId, hoverId } = action.payload;
      const dragindex = findItemIndexById(state.lists, draggedId);
      const hoverindex = findItemIndexById(state.lists, hoverId);
      state.lists = moveItem(state.lists, dragindex, hoverindex);
      break;

    case "SET_DRAGGED_ITEM":
      console.log(state);
      state.draggedItem = action.payload;
      break;
  }
};
