export interface IInputEditableProps {
  className?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  type: string;
  min?: number;
}
