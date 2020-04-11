import React, { FunctionComponent } from "react";
import { MultipleSelector } from "../Selector/MultipleSelector";
import { ICapability } from "$interfaces/Capability";
import { identity } from "lodash";
import { ICapabiltiesSelector } from "./interface";
import { toUpperCase } from "$utils/toUpperCase";

export const CapabilitiesSelector: FunctionComponent<ICapabiltiesSelector> = (
  {
    options,
    label
  }
) => (
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
