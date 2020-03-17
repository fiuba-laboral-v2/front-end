import React, { FunctionComponent, useState } from "react";
import { EditableField } from "./component";
import { IEditableFieldContainerProps } from "./interface";


const EditableFieldContainer: FunctionComponent<IEditableFieldContainerProps> = (
  {
    setField,
    defaultValue,
    fieldName
  }) => {
  const [state, setState] = useState(defaultValue);
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
      value={state}
      fieldName={fieldName}
    />
  );
};

export { EditableFieldContainer };
