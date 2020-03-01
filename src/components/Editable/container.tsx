import React, { FunctionComponent, useState } from "react";
import { IEditable } from "./interface";
import styles from "./styles.module.scss";
import CreateIcon from "@material-ui/icons/Create";


const EditableContainer: FunctionComponent<IEditable> = (
  {
    editableComponent,
    staticComponent,
    onClick
  }) => {
  const [isEditing, setEditing] = useState(false);

  if (isEditing) {
    return (
      <div className={styles.editable}>
        {editableComponent}
        <CreateIcon
          onClick={() => {
            setEditing(false);
            if (onClick) onClick();
          }}
          className={styles.editIcon}
        />
      </div>
    );
  }

  return (
    <div className={styles.editable}>
      {staticComponent}
      <CreateIcon
        onClick={() => setEditing(true)}
        className={styles.editIcon}
      />
    </div>
  );
};

export { EditableContainer };
