//there are 2 method one is that you can union 2 interface or
//second methord is given below
import { DragItem } from "../DragItem";
import { List } from "./AppStateReducer";

export type Action =
  | { type: "ADD_LIST"; payload: string } //Contains only the list title
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "UPDATE_LIST"; payload: { lists: List[] } }
  | {
      type: "REMOVE_TASK";
      payload: {
        task: string; // ID of the task to be removed
        list: string; // ID of the list containing the task
      };
    }
  | {
      type: "MOVE_LIST";
      payload: {
        draggedId: string;
        hoverId: string;
      };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | null;
    };
//contains the list id and task text(title)

//Action function :- ADD LIST return type
export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const addTask = (text: string, listid: string): Action => ({
  type: "ADD_TASK",
  payload: { text: text, listId: listid },
});

export const updateList = (list: List[]): Action => ({
  type: "UPDATE_LIST",
  payload: { lists: list },
});

export const removeTask = (taskId: string, listId: string): Action => ({
  type: "REMOVE_TASK",
  payload: { task: taskId, list: listId },
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggedId,
    hoverId,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});
