import React, { FunctionComponent } from "react";
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
  const { data: translationsData } = useQuery(getTranslations, {
      variables: { paths: ["applicant.capabilities"] }
    }
  );

  const [ title ] = translationsData ? translationsData.getTranslations : [""];

  return (
    <CapabilitiesEditable
      setList={setList}
      capabilities={capabilities?.map((capability: ICapability) => capability.description)}
      title={title}
    />
  );
};

export { CapabilitiesEditableContainer };
