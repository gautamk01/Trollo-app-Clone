import { useState } from "react";
import { AddItemButton } from "./styled";
import { NewItemForm } from "./NewItemForm";

type AddNewItemProps = {
  onAddupper(text: string): void; //This is a function
  ColorDark?: string;
  toggleButtonText: string;
};

export const AddNewButton = (props: AddNewItemProps) => {
  const { onAddupper, ColorDark, toggleButtonText } = props;
  const [showForm, setshowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAddbase={(text) => {
          onAddupper(text);
          setshowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton $dark={ColorDark} onClick={() => setshowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
