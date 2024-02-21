import { createContext, useContext, Dispatch } from "react";
import { AppState, List, Task, appStateReducer } from "./AppStateReducer";
import { useImmerReducer } from "use-immer";
import { Action } from "./action";
import {DragItem} from "../DragItem";
// Demi data with the type of AppState

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: "0",
      text: "To Do",
      task: [{ id: "c0", text: " Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In progress",
      task: [{ id: "c1", text: "Learn TypeScript" }],
    },
    {
      id: "2",
      text: "Done",
      task: [{ id: "c2", text: "Begin to use Static type" }],
    },
  ],
};

//Data-Type for Context props
/**
 * useContext hook => Pass the Props to the Component which is wrapped by the Provider
 * useReducer => Mainly used to control multiple States in React
 * Props type :
 * 1. list => List[]
 * 2. getTasksByListId =>return Task[]
 * 3. dispatch => Dispatch<Action>
 */
type AppStateContextProps = {
  lists: List[]; //List
  getTasksByListId(id: string): Task[]; // function with return type of Task
  getListDelete(id: string): List[];
  draggedItem: DragItem | null;
  dispatch: Dispatch<Action>;
};

//we Create a Context Like a Bridge to the Data
//AppStateContext (Name of the Bridge) and AppStateContextProps(type of the people who can use the Bridge)
//{} -> initial Data  & we use 'as' for type-cast
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

//We need to include the Children which is the React components => children type : React.ReactNode
type AppStateProviderProps = {
  children: React.ReactNode;
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists,draggedItem } = state; //list from appData

  const getTasksByListId = (id: string) => {
    //function from the data
    return lists.find((list) => list.id === id)?.task || [];
  };

  const getListDelete = (id: string) => {
    return lists.filter((list) => list.id !== id);
  };

  //This will help to share the data(aka value) which are mention in the object to all the childrens
  /**
   * Provider Provide the Value :=
   * 1. lists =>
   */

  return (
    <AppStateContext.Provider
      value={{
        lists,
        getTasksByListId,
        dispatch,
        getListDelete,
        draggedItem
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

// This is a custom Hook that we create to consumne that the Provider is giving to us
export const useAppState = () => {
  //for that we use useContext (using the context of AppState Context)
  //this works only to the children inside the provider
  return useContext(AppStateContext);
};
