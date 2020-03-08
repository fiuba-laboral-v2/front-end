import React, { FunctionComponent } from "react";
import { IItemsDetailEditableProps } from "./interface";
import styles from "./styles.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Check from "@material-ui/icons/Check";

const ItemsDetailEditable: FunctionComponent<IItemsDetailEditableProps> = (
  {
    items,
    onDelete,
    setIsAdding,
    isAdding,
    onCheck,
    titleTranslation,
    children
  }) => {
  return (
    <section className={styles.items}>
      <div className={styles.headers}>
        <span className={styles.title}> {titleTranslation}:</span>
        <AddCircleOutline
          className={styles.addIcon}
          onClick={() => {
            if (isAdding) return setIsAdding(false);
            setIsAdding(true);
          }}
        />
      </div>
      {
        items?.map((item, index) =>
          (
            <div key={index} className={styles.row}>
              <span className={styles.item}>{item}</span>
              <DeleteIcon
                fontSize="small"
                className={styles.deleteIcon}
                onClick={() => onDelete(item)}
              />
            </div>
          )
        )
      }
      {
        isAdding ?
          <div className={styles.footer}>
            {children}
            <Check className={styles.checkIcon} onClick={() => onCheck()}/>
          </div>
          :
          <div></div>
      }
    </section>
  );
};

export { ItemsDetailEditable };
