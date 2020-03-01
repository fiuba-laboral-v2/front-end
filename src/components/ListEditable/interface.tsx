export interface IListEditableProps {
  setList: (newValue: string | number) => void;
  list?: string[];
  title: string;
  onFinish?: () => void;
}
