import React, { FunctionComponent, useState } from "react";
import { ItemsDetailEditable } from "./component";
import { IItemsDetailEditableContainerProps } from "./interface";

const ItemsDetailEditableContainer: FunctionComponent<IItemsDetailEditableContainerProps> = (
  {
    items,
    setItem,
    titleTranslation
  }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [state, setState] = useState<string | number>();

  const onDelete = (item: string) => {
    alert(`Are you sure you want to delete: ${item}`);
  };

  const onAdding = (item: string | number) => {
    setState(item);
  };

  const onFinish = () => {
    if (state) setItem(state);
    setIsAdding(false);
  };

  return (
    <ItemsDetailEditable
      titleTranslation={titleTranslation}
      onFinish={onFinish}
      setIsAdding={setIsAdding}
      isAdding={isAdding}
      onAdding={onAdding}
      onDelete={onDelete}
      items={items}
    />
  );
};

export { ItemsDetailEditableContainer };
