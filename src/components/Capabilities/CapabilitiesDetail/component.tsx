import React, { FunctionComponent } from "react";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { ICapabilitiesProps, ICapability } from "./interface";

const CapabilitiesDetail: FunctionComponent<ICapabilitiesProps> = (
  {
    capabilities,
    title
  }) => {

  return (
    <ApplicantItemsDetail
      items={capabilities?.map((capability: ICapability) => capability.description)}
      title={title}
    />
  );
};

export { CapabilitiesDetail };
