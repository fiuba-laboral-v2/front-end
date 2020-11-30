import React, { FunctionComponent } from "react";
import { ICapabilitiesSelectorContainer } from "./interfaces";
import { CapabilitiesSelector } from "./compontent";
import { useCapabilities } from "$hooks/queries";

const CapabilitiesSelectorContainer: FunctionComponent<ICapabilitiesSelectorContainer> = ({
  label
}) => {
  const capabilities = useCapabilities();
  return <CapabilitiesSelector label={label} options={capabilities} />;
};

export { CapabilitiesSelectorContainer };
