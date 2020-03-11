import React, { FunctionComponent, useState } from "react";
import { FieldEditable } from "./component";
import { IFieldEditableContainerProps } from "./interface";


const FieldEditableContainer: FunctionComponent<IFieldEditableContainerProps> = (
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
    <FieldEditable
      isEditing={isEditing}
      setEditing={setEditing}
      setField={onChange}
      defaultField={state}
      fieldName={fieldName}
    />
  );
};

export { FieldEditableContainer };
