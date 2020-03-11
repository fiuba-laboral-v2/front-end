import React, { FunctionComponent } from "react";
import { IFieldEditableProps } from "./interface";
import styles from "./styles.module.scss";
import { InputEditable } from "$components/InputEditable";
import CreateIcon from "@material-ui/icons/Create";

const FieldEditable: FunctionComponent<IFieldEditableProps> = (
  {
    isEditing,
    setEditing,
    setField,
    defaultField,
    fieldName
  }
) => {
  const toggleField = () => {
    if (isEditing) {
      return (
        <InputEditable
          className={styles.inputFieldValue}
          type={"text"} onChange={setField}
          defaultValue={defaultField}
        />
      );
    }
    return (<span className={styles.fieldValue}>{defaultField}</span>);
  };

  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldName}>{`${fieldName}:`}</div>
      <div className={styles.editContainer}>
        { toggleField() }
        <CreateIcon onClick={() => setEditing(!isEditing)} className={styles.editIcon}/>
      </div>
    </div>
  );
};

export { FieldEditable };
