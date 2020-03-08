export interface IItemsDetailEditableContainerProps {
  items: string[];
  titleTranslation: string;
  setItem: (newValue: string | number) => void;
}

export interface IItemsDetailEditableProps {
  titleTranslation: string;
  items: string[];
  onDelete: (item: string) => void;
  onAdding: (item: string | number) => void;
  isAdding: boolean;
  setIsAdding: (isAdding: boolean) => void;
  onFinish: () => void;
}
