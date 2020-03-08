export interface IItem {
  id: string;
  value: string;
}

export interface IItemsDetailEditableContainerProps {
  items: IItem[];
  titleTranslation: string;
  onDelete: (item: string) => void;
  onFinish: () => void;
}

export interface IItemsDetailEditableProps {
  titleTranslation: string;
  items: IItem[];
  onDelete: (item: string) => void;
  isAdding: boolean;
  setIsAdding: (isAdding: boolean) => void;
  onCheck: () => void;
}
