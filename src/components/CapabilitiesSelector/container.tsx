import React, { FunctionComponent } from "react";
import { ICapabilitiesSelectorContainer } from "./interfaces";
import { CapabilitiesSelector } from "./compontent";
import { useCapabilities } from "$hooks/queries";

const CapabilitiesSelectorContainer: FunctionComponent<ICapabilitiesSelectorContainer> = ({
  label
}) => {
  const result = useCapabilities();
  return <CapabilitiesSelector label={label} options={result.data?.getCapabilities} />;
};

export { CapabilitiesSelectorContainer };
