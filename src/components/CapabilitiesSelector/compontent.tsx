import React, { FunctionComponent } from "react";
import { MultipleSelector } from "../Selector/MultipleSelector";
import { ICapability } from "$interfaces/Applicant";
import { identity } from "lodash";

export const CapabilitiesSelector: FunctionComponent<ICapabiltiesSelector> = (
  {
    options,
    label
  }
) => (
  <MultipleSelector<ICapability, ICapability>
    name={"capabilities"}
    getOptionValue={identity}
    getOptionLabel={capability => capability.description}
    compareValuesBy={capability => capability.description.toLowerCase()}
    valueToString={capability => capability.description}
    stringToValue={stringValue => ({ description: stringValue })}
    options={options}
    label={label}
  />
);

interface ICapabiltiesSelector {
  options: ICapability[];
  label: string;
}
