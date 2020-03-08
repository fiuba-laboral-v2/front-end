import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/Detail/ItemsDetail";
import { ICapabilitiesProps, ICapability } from "./interface";

const CapabilitiesDetail: FunctionComponent<ICapabilitiesProps> = (
  {
    capabilities,
    title
  }) => {

  return (
    <ItemsDetail
      items={capabilities?.map((capability: ICapability) => capability.description)}
      title={title}
    />
  );
};

export { CapabilitiesDetail };
