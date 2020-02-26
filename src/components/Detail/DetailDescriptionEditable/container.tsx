import React, { FunctionComponent, useState } from "react";
import { DetailDescriptionEditable } from "./component";
import { DetailDescription } from "$components/Detail/DetailDescription";
import { IDetailDescriptionEditableProps } from "./interface";


const DetailDescriptionEditableContainer: FunctionComponent<IDetailDescriptionEditableProps> = (
  {
    setDescription,
    defaultDescription
  }) => {
  const [toggle, setToggle] = useState(true);

  const submit = () => {
    return setToggle(true);
  };

  if (toggle) {
    return (
      <DetailDescription
        description={defaultDescription}
        onClick={() => setToggle(false)}
      />
    );
  }

  return (
    <DetailDescriptionEditable
      setDescription={setDescription}
      defaultDescription={defaultDescription}
      submit={submit}
    />
  );
};

export { DetailDescriptionEditableContainer };
