export interface IFieldEditableProps {
  setField: (newByLine: string | number) => void;
  defaultField: string | number;
  fieldName: string;
}
