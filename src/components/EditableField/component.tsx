import React, { FunctionComponent } from "react";
import { IFieldEditableProps } from "./interface";
import styles from "./styles.module.scss";
import { InputEditable } from "$components/InputEditable";
import CreateIcon from "@material-ui/icons/Create";

const EditableField: FunctionComponent<IFieldEditableProps> = (
  {
    isEditing,
    setEditing,
    setField,
    value,
    fieldName
  }
) => {
  const toggleField = () => {
    return (
      isEditing ?
        <InputEditable
          className={styles.inputFieldValue}
          type={"text"} onChange={setField}
          defaultValue={value}
        />
        :
        <span className={styles.fieldValue}>{value}</span>
    );
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

export { EditableField };
