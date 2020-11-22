import React, { FunctionComponent, useMemo } from "react";
import { MultipleSearchSelector } from "../SearchSelector/MultipleSearchSelector";
import { ICapability } from "$interfaces/Capability";
import { identity } from "lodash";
import { ICapabilitiesSelector } from "./interfaces";
import { TextFormatter } from "$models/TextFormatter";

export const CapabilitiesSelector: FunctionComponent<ICapabilitiesSelector> = ({
  options,
  label
}) => {
  const formattedOptions = useMemo(
    () =>
      options?.map(({ uuid, description }) => ({
        uuid,
        description: TextFormatter.capitalize(description)
      })) || [],
    [options]
  );

  return (
    <MultipleSearchSelector<ICapability, ICapability>
      name={"capabilities"}
      getOptionValue={identity}
      getOptionLabel={({ description }) => description}
      compareValuesBy={({ description }) => description.toLowerCase()}
      valueToString={({ description }) => TextFormatter.capitalize(description)}
      stringToValue={stringValue => ({ description: stringValue })}
      options={formattedOptions}
      label={label}
    />
  );
};
