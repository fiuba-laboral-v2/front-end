import React, { FunctionComponent, useState } from "react";
import { DetailDescriptionEditable } from "./component";
import { DetailDescription } from "$components/Detail/DetailDescription";


const DetailDescriptionEditableContainer: FunctionComponent = () => {
  const [state, setState] = useState({
    description: "",
    update: false
  });

  const submit = () => {
    setState({description: state.description, update: true});
    return;
  };

  const handleChange = (newDescription: string) => {
    return setState({description: newDescription, update: false});
  };

  if (state.update) {
    return (
      <DetailDescription
        description={state.description}
        onClick={() => setState({description: state.description, update: false})}
      />
    );
  }

  return (
    <DetailDescriptionEditable
      setDescription={handleChange}
      defaultDescription={state.description}
      submit={submit}
    />
  );
};

export { DetailDescriptionEditableContainer };
