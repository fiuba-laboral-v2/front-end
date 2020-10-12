import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { RemoveButton } from "$components/RemoveButton";

export const FieldSet: FunctionComponent<IFieldSetProps> = (
  {
    onRemove,
    children
  }) => (
  <div className={styles.fieldSetContainer}>
    <div className={styles.childrenContainer}>{children}</div>
    <RemoveButton className={styles.remove} onClick={onRemove}/>
  </div>
);

export interface IFieldSetProps {
  onRemove: () => void;
}
