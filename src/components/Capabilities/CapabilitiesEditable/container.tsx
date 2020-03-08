import React, { FunctionComponent, useState } from "react";
import { ICapabilitiesEditableContainerProps } from "./interface";
import { CapabilitiesEditable } from "./component";
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

  const onFinish = () => {
    if (state) setList(state);
  };

  const onDelete = (item: string) => {
    alert(`Are you sure to delete: ${item}`);
  };
  return (
    <CapabilitiesEditable
      onFinish={onFinish}
      onDelete={onDelete}
      setState={setState}
      capabilities={capabilities}
      title={title}
    />
  );
};

export { CapabilitiesEditableContainer };
