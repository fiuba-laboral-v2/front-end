import React, { FunctionComponent, useState } from "react";
import { EditableField } from "./component";
import { IFieldEditableContainerProps } from "./interface";


const EditableFieldContainer: FunctionComponent<IFieldEditableContainerProps> = (
  {
    setField,
    defaultField,
    fieldName
  }) => {
  const [state, setState] = useState(defaultField);
  const [isEditing, setEditing] = useState(false);

  const onChange = (newField: string) => {
    setState(newField);
    setField(newField);
  };

  return (
    <EditableField
      isEditing={isEditing}
      setEditing={setEditing}
      setField={onChange}
      defaultField={state}
      fieldName={fieldName}
    />
  );
};

export { EditableFieldContainer };
