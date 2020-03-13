import React, { FunctionComponent, useState } from "react";
import { IEditableCapabilitiesContainerProps } from "./interface";
import { EditableCapabilities } from "./component";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";

const EditableCapabilitiesContainer: FunctionComponent<IEditableCapabilitiesContainerProps> = (
  {
    addCapability,
    deleteCapability,
    capabilities
  }) => {
  const [state, setState] = useState<string>();
  const { data: translationsData } = useQuery(getTranslations, {
      variables: { paths: ["applicant.capabilities"] }
    }
  );
  const [ title ] = translationsData ? translationsData.getTranslations : [""];

  const onFinish = () => {
    if (state) addCapability(state);
  };

  return (
    <EditableCapabilities
      onFinish={onFinish}
      onDelete={deleteCapability}
      setState={setState}
      capabilities={capabilities}
      title={title}
    />
  );
};

export { EditableCapabilitiesContainer };
