export interface IInputEditableProps {
  className?: string;
  onChange: (value: string | number) => void;
  defaultValue?: string | number;
  type: string;
  min?: number;
}
