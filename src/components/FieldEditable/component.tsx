import React, { FunctionComponent } from "react";
import { IFieldEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import styles from "./styles.module.scss";

const FieldEditable: FunctionComponent<IFieldEditableProps> = (
  {
    setField,
    defaultField,
    children
  }
) => (
  <Editable
    editableComponent={
      <input
        className={styles.fieldEditable}
        type="text"
        defaultValue={`${defaultField}`}
        onChange={event => setField(event.target.value)}
      />
    }
    staticComponent={
      <div>{children}</div>
    }
  />
);

export { FieldEditable };
