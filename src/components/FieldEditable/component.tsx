import React, { FunctionComponent } from "react";
import { IFieldEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import styles from "./styles.module.scss";

const FieldEditable: FunctionComponent<IFieldEditableProps> = (
  {
    setField,
    defaultField,
    fieldName
  }
) => (
  <Editable
    editableComponent={
      <div className={styles.fieldContainer}>
        <div className={styles.fieldName}>{`${fieldName}:`}</div>
        <input
          className={styles.fieldEditable}
          type="text"
          autoFocus
          defaultValue={`${defaultField}`}
          onChange={event => setField(event.target.value)}
        />
      </div>
    }
    staticComponent={
      <div className={styles.fieldContainer}>
        <div className={styles.fieldName}>{`${fieldName}:`}</div>
        <span className={styles.fieldStatic}>{defaultField}</span>
      </div>
    }
  />
);

export { FieldEditable };
