export interface IFieldEditableProps {
  setEditing: (isEditing: boolean) => void;
  isEditing: boolean;
  setField: (newField: string) => void;
  value: string;
  fieldName: string;
}

export interface IFieldEditableContainerProps {
  setField: (newField: string) => void;
  defaultValue: string;
  fieldName: string;
}
