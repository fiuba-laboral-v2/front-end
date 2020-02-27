import React, { FunctionComponent, useState } from "react";
import { FieldEditable } from "./component";
import { IFieldEditableProps } from "./interface";


const FieldEditableContainer: FunctionComponent<IFieldEditableProps> = (
  {
    setField,
    defaultField,
    children
  }) => {
  const [state, setState] = useState(defaultField);
  const onChange = (newByLine: string | number) => {
    setState(newByLine);
    setField(newByLine);
  };
  return (
    <FieldEditable setField={onChange} defaultField={state}>
      {children}
    </FieldEditable>
  );
};

export { FieldEditableContainer };
