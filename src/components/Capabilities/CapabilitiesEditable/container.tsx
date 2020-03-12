import React, { FunctionComponent, useState } from "react";
import { ICapabilitiesEditableContainerProps } from "./interface";
import { CapabilitiesEditable } from "./component";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "../../../graphql/queries";

const CapabilitiesEditableContainer: FunctionComponent<ICapabilitiesEditableContainerProps> = (
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
    <CapabilitiesEditable
      onFinish={onFinish}
      onDelete={deleteCapability}
      setState={setState}
      capabilities={capabilities}
      title={title}
    />
  );
};

export { CapabilitiesEditableContainer };
