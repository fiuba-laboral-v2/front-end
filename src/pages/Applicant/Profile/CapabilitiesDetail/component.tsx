import React, { FunctionComponent } from "react";
import { ICapabilitiesProps } from "./interface";
import { Subtitle } from "$components/Subtitle";
import { TagSet } from "$components/TagSet";

const CapabilitiesDetail: FunctionComponent<ICapabilitiesProps> = (
  {
    capabilities,
    title,
    className
  }) => (
  <div className={className}>
    <Subtitle>{title}</Subtitle>
    <TagSet tags={capabilities.map(capability => capability.description)}/>
  </div>
);

export { CapabilitiesDetail };
