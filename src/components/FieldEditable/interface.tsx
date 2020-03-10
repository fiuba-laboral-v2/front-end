export interface IFieldEditableProps {
  setEditing: (isEditing: boolean) => void;
  isEditing: boolean;
  setField: (newByLine: string | number) => void;
  defaultField: string | number;
  fieldName: string;
}

export interface IFieldEditableContainerProps {
  setField: (newByLine: string | number) => void;
  defaultField: string | number;
  fieldName: string;
}
