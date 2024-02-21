import { useState } from "react";
import { NewItemInput, NewItemButton, NewItemFormContainer } from "./styled";
import { useFocus } from "./util/useFocus";

type NewItemFormProp = {
  onAddbase(text: string): void;
};

export const NewItemForm = ({ onAddbase }: NewItemFormProp) => {
  const [Text, setText] = useState("");
  const focus = useFocus();
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAddbase(Text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={focus}
        value={Text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnter}
      />
      <NewItemButton onClick={() => onAddbase(Text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
