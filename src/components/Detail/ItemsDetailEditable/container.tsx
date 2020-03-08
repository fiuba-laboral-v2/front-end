import React, { FunctionComponent, useState } from "react";
import { ItemsDetailEditable } from "./component";
import { IItemsDetailEditableContainerProps } from "./interface";

const ItemsDetailEditableContainer: FunctionComponent<IItemsDetailEditableContainerProps> = (
  {
    onFinish,
    onDelete,
    items,
    titleTranslation,
    children
  }) => {
  const [isAdding, setIsAdding] = useState(false);

  const onCheck = () => {
    onFinish();
    setIsAdding(false);
  };

  return (
    <ItemsDetailEditable
      children={children}
      titleTranslation={titleTranslation}
      onCheck={onCheck}
      setIsAdding={setIsAdding}
      isAdding={isAdding}
      onDelete={onDelete}
      items={items}
    />
  );
};

export { ItemsDetailEditableContainer };
