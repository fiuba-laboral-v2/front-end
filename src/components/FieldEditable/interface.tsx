export interface IFieldEditableProps {
  setEditing: (isEditing: boolean) => void;
  isEditing: boolean;
  setField: (newField: string) => void;
  defaultField: string;
  fieldName: string;
}

export interface IFieldEditableContainerProps {
  setField: (newField: string) => void;
  defaultField: string;
  fieldName: string;
}
