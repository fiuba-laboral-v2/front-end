import React, { FunctionComponent } from "react";
import { IFieldEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import styles from "./styles.module.scss";

const FieldEditable: FunctionComponent<IFieldEditableProps> = (
  {
    setField,
    defaultField,
    children,
    className
  }
) => (
  <Editable
    editableComponent={
      <input
        className={`${className} ${styles.fieldEditable}`}
        type="text"
        defaultValue={`${defaultField}`}
        onChange={event => setField(event.target.value)}
      />
    }
    staticComponent={
      <div className={styles.fieldStatic}>{children}&#8203;</div>
    }
  />
);

export { FieldEditable };
