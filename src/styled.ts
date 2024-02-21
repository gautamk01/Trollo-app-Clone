import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;
export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items along the cross axis */
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

interface AddItemColorProps {
  $dark?: string;
}

export const AddItemButton = styled.button<AddItemColorProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) =>
    Boolean(props.$dark) ? "#000" : "#fff"}; // Use props.dark directly
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

type CloseButtonProps = {
  $color: string;
};
export const CloseButton = styled.button<CloseButtonProps>`
  width: 30px;
  height: 20px;
  border-radius: 20px;
  background: ${(props) => props.$color}
  transition: 0.2s ease-in-out;
`;

export const ListCardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px;
`;
