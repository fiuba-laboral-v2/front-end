import React, { FunctionComponent, useState } from "react";
import { IEditable } from "./interface";
import styles from "./styles.module.scss";


const EditableContainer: FunctionComponent<IEditable> = (
  {
    editableComponent,
    staticComponent
  }) => {
  const [isEditing, setEditing] = useState(true);

  if (isEditing) {
    return (
      <div className={styles.editable} onBlur={() => setEditing(false)}>
        {editableComponent}
      </div>
    );
  }

  return (
      <div className={styles.editable} onClick={() => setEditing(true)}>
        {staticComponent}
      </div>
  );
};

export { EditableContainer };
