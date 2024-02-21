import "./App.css";
import { AppContainer } from "./styled";
import { AddNewButton } from "./AddnewItem";

// parent -> Childern ({text} : ColumnProps)

import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/action";
export function App() {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {/* list of <column/> Main List */}
      {lists.map((l) => (
        <Column key={l.id} text={l.text} id={l.id} />
      ))}
      {/* button to add a New main List */}

      {/* toggleButtonText:- Gives the text to the Button
       onAddupper :- passing the Props from the NewItemForm to AddNewButton Component
       onAddupper (returns) :- a Dispatch function called */}
      <AddNewButton
        toggleButtonText="+ Add New List"
        ColorDark="false"
        onAddupper={(te) => {
          console.log(te);
          return dispatch(addList(te));
        }} // children to parent props exchange
      />
    </AppContainer>
  );
}
