import React, { FunctionComponent, useState } from "react";
import { ICapabilitiesEditableContainerProps } from "./interface";
import { CapabilitiesEditable } from "./component";
import { ICapability } from "../../../interfaces/Applicant";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "../../../graphql/queries";

const CapabilitiesEditableContainer: FunctionComponent<ICapabilitiesEditableContainerProps> = (
  {
    setList,
    capabilities
  }) => {
  const [state, setState] = useState<string | number>();
  const { data: translationsData } = useQuery(getTranslations, {
      variables: { paths: ["applicant.capabilities"] }
    }
  );

  const [ title ] = translationsData ? translationsData.getTranslations : [""];

  const onChange = (newValue: string | number) => {
    setState(newValue);
  };

  const onFinish = () => {
    if (state) setList(state);
    setState(undefined);
  };

  return (
    <CapabilitiesEditable
      setList={onChange}
      capabilities={capabilities?.map((capability: ICapability) => capability.description)}
      title={title}
      onFinish={onFinish}
    />
  );
};

export { CapabilitiesEditableContainer };
