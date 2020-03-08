import React, { FunctionComponent } from "react";
import { IItemsDetailEditableProps } from "./interface";
import styles from "./styles.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Check from "@material-ui/icons/Check";
import { InputEditable } from "$components/InputEditable";

const ItemsDetailEditable: FunctionComponent<IItemsDetailEditableProps> = (
  {
    items,
    onAdding,
    onDelete,
    setIsAdding,
    isAdding,
    onFinish,
    titleTranslation
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
            <InputEditable className={styles.input} type={"text"} onChange={onAdding}/>
            <Check className={styles.checkIcon} onClick={() => onFinish()}/>
          </div>
          :
          <div></div>
      }
    </section>
  );
};

export { ItemsDetailEditable };
