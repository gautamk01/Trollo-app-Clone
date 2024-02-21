import "./App.css";
import { AppContainer } from "./styled";
import { AddNewButton } from "./AddnewItem";
import { useReducer } from "react";

// parent -> Childern ({text} : ColumnProps)

// type State = {
//   count: number;
//   error: string | null;
// };

// type Action = {
//   type: "increament" | "Decreament" | "Reset";
// };

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increament" | "Decreament" | "Reset";
}

const Increament = (): Action => ({ type: "increament" });
const Decreament = (): Action => ({ type: "Decreament" });
const Reset = (): Action => ({ type: "Reset" });

const increamentChecker = (state: State): State => {
  if (state.count >= 5) {
    return { ...state, error: "Maximum number is 5" };
  } else {
    return { ...state, count: state.count + 1, error: null };
  }
};
const reducerfunction = (state: State, action: Action): State => {
  switch (action.type) {
    case "increament":
      return increamentChecker(state);

    case "Decreament":
      return { ...state, count: state.count - 1, error: null };
    case "Reset":
      return { ...state, count: 0, error: null };
    default:
      throw new Error();
  }
};

export function App() {
  const [state, dispatch] = useReducer(reducerfunction, {
    count: 0,
    error: null,
  });
  return (
    <>
      {state.error ? <p style={{ color: "red" }}>{state.error}</p> : <></>}
      <p>Count : {state.count}</p>

      <div
        style={{
          width: "10%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => dispatch({ type: "increament" })}>+</button>

        <button onClick={() => dispatch(Decreament())}>-</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </>
  );
}

// import "./App.css";
// import { AppContainer } from "./styled";
// import { AddNewButton } from "./AddnewItem";

// // parent -> Childern ({text} : ColumnProps)

// import { Column } from "./Column";
// export function App() {
//   return (
//     <AppContainer>
//       <Column text="Todo: APP" />
//       <AddNewButton
//         toggleButtonText="+ Add New List"
//         onAddupper={(text) => console.log(text)} // children to parent props exchange
//       />
//     </AppContainer>
//   );
// }
