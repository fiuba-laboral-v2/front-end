import React, { FunctionComponent } from "react";

import { identity } from "lodash";

import { MultipleSearchSelector } from "$components/SearchSelector/MultipleSearchSelector";
import { IComponentProps } from "./interfaces";
import { ICareer } from "$interfaces/Career";

export const CareerSelector: FunctionComponent<IComponentProps> = ({
  className,
  options,
  translations,
  name,
  mandatory
}) => (
  <MultipleSearchSelector<ICareer, ICareer>
    className={className}
    mandatory={mandatory}
    name={name}
    getOptionValue={identity}
    getOptionLabel={({ description }) => description}
    compareValuesBy={({ code }) => code}
    valueToString={({ description }) => description}
    stringToValue={stringValue => {
      const option = options.find(({ description }) => description === stringValue);
      if (!option) return { code: "", description: stringValue };

      return {
        code: option.code,
        description: stringValue
      };
    }}
    options={options}
    label={translations.career}
    allowNewOption
  />
);
