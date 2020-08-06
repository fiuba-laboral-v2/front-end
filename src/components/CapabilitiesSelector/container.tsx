import React, { Fragment, FunctionComponent } from "react";
import { ICapabiltiesSelectorContainer } from "./interface";
import { CapabilitiesSelector } from "./compontent";
import { ICapability } from "$interfaces/Capability";
import { useQuery } from "@apollo/client";
import { GET_CAPABILITIES } from "$queries";

const CapabilitiesSelectorContainer: FunctionComponent<ICapabiltiesSelectorContainer> = props => {
  const {
    data: { getCapabilities: capabilities } = { getCapabilities: [] as ICapability[] },
    error: capabilitiesError,
    loading: loadingCapabilities
  } = useQuery(GET_CAPABILITIES);

  if (capabilitiesError || loadingCapabilities) return <Fragment/>;

  return <CapabilitiesSelector {...props} options={capabilities}/>;
};

export { CapabilitiesSelectorContainer };
