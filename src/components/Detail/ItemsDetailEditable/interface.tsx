export interface IItemsDetailEditableContainerProps {
  items: string[];
  titleTranslation: string;
  onDelete: (item: string) => void;
  onFinish: () => void;
}

export interface IItemsDetailEditableProps {
  titleTranslation: string;
  items: string[];
  onDelete: (item: string) => void;
  isAdding: boolean;
  setIsAdding: (isAdding: boolean) => void;
  onCheck: () => void;
}
