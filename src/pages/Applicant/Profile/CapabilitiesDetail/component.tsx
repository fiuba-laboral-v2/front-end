import React, { Fragment, FunctionComponent } from "react";
import { ICapabilitiesProps } from "./interface";
import { Subtitle } from "$components/Subtitle";
import { TagSet } from "$components/TagSet";

const CapabilitiesDetail: FunctionComponent<ICapabilitiesProps> = (
  {
    capabilities,
    title,
    className
  }) => {
  if (capabilities.length === 0) return <Fragment/>;

  return (
    <div className={className}>
      <Subtitle>{title}</Subtitle>
      <TagSet tags={new Set(capabilities.map(capability => capability.description))}/>
    </div>
  );
};

export { CapabilitiesDetail };
