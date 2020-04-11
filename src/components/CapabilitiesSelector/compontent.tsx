import React, { FunctionComponent } from "react";
import { MultipleSelector } from "../Selector/MultipleSelector";
import { ICapability } from "$interfaces/Capability";
import { capitalize, identity } from "lodash";

export const CapabilitiesSelector: FunctionComponent<ICapabiltiesSelector> = (
  {
    options,
    label
  }
) => {
  const toUpperCase = (description: string) => description.split(" ").map(capitalize).join(" ");

  return (
    <MultipleSelector<ICapability, ICapability>
      name={"capabilities"}
      getOptionValue={identity}
      getOptionLabel={({ description }) => description}
      compareValuesBy={({ description }) => description.toLowerCase()}
      valueToString={({ description }) => toUpperCase(description)}
      stringToValue={stringValue => ({ description: stringValue })}
      options={options.map(({ uuid, description }) => (
        { uuid, description: toUpperCase(description) }
      ))}
      label={label}
    />
  );
};

interface ICapabiltiesSelector {
  options: ICapability[];
  label: string;
}
