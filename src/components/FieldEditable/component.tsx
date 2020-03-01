import React, { FunctionComponent } from "react";
import { IFieldEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import styles from "./styles.module.scss";
import { InputEditable } from "$components/InputEditable";

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
        <InputEditable onChange={setField} defaultValue={defaultField}/>
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
