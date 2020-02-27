import React, { FunctionComponent, useState } from "react";
import { DetailDescriptionEditable } from "./component";
import { IDetailDescriptionEditableProps } from "./interface";


const DetailDescriptionEditableContainer: FunctionComponent<IDetailDescriptionEditableProps> = (
  {
    setDescription,
    defaultDescription
  }) => {
  const [state, setState] = useState(defaultDescription);
  const onChange = (newDescription: string) => {
    setState(newDescription);
    setDescription(newDescription);
  };
  return (
    <DetailDescriptionEditable
      setDescription={onChange}
      defaultDescription={state}
    />
  );
};

export { DetailDescriptionEditableContainer };
