import { useAppState } from "./state/AppStateContext";
import { removeTask } from "./state/action";
import { CardContainer, CloseButton } from "./styled";
type Cardprops = {
  listid: string;
  text: string;
  id: string;
};
export const Card = ({ text, id, listid }: Cardprops) => {
  const { dispatch } = useAppState();
  return (
    <CardContainer>
      <h5> {text}</h5>
      <CloseButton
        $color="red"
        onClick={() => {
          dispatch(removeTask(id, listid));
        }}
      >
        x
      </CloseButton>
    </CardContainer>
  );
};
