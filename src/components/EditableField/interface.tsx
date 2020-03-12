export interface IEditableFieldProps {
  setEditing: (isEditing: boolean) => void;
  isEditing: boolean;
  setField: (newField: string) => void;
  value: string;
  fieldName: string;
}

export interface IEditableFieldContainerProps {
  setField: (newField: string) => void;
  defaultValue: string;
  fieldName: string;
}
