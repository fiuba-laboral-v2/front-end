import React, { FunctionComponent, useState } from "react";
import { IEditable } from "./interface";


const EditableContainer: FunctionComponent<IEditable> = (
  {
    editableComponent,
    staticComponent
  }) => {
  const [isEditing, setEditing] = useState(true);

  if (isEditing) {
    return (
      <div onBlur={() => setEditing(false)}>
        {editableComponent}
      </div>
    );
  }

  return (
      <div onClick={() => setEditing(true)}>
        {staticComponent}
      </div>
  );
};

export { EditableContainer };
