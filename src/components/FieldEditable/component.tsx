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
  const field = () => {
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

  const toggleIsEditing = () => {
    if (isEditing) return setEditing(false);
    return setEditing(true);
  };

  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldName}>{`${fieldName}:`}</div>
      <div className={styles.editContainer}>
        {field()}
        <CreateIcon onClick={toggleIsEditing} className={styles.editIcon}/>
      </div>
    </div>
  );
};

export { FieldEditable };
