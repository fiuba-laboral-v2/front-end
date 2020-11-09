import React, { FunctionComponent } from "react";
import { MultipleSearchSelector } from "../SearchSelector/MultipleSearchSelector";
import { ICapability } from "$interfaces/Capability";
import { identity } from "lodash";
import { ICapabilitiesSelector } from "./interfaces";
import { TextFormatter } from "$models/TextFormatter";

export const CapabilitiesSelector: FunctionComponent<ICapabilitiesSelector> = ({
  options,
  label
}) => (
  <MultipleSearchSelector<ICapability, ICapability>
    name={"capabilities"}
    getOptionValue={identity}
    getOptionLabel={({ description }) => description}
    compareValuesBy={({ description }) => description.toLowerCase()}
    valueToString={({ description }) => TextFormatter.capitalize(description)}
    stringToValue={stringValue => ({ description: stringValue })}
    options={options.map(({ uuid, description }) => ({
      uuid,
      description: TextFormatter.capitalize(description)
    }))}
    label={label}
  />
);
