import React, { FunctionComponent } from "react";

import { identity } from "lodash";
import { TextFormatter } from "$models/TextFormatter";

import { MultipleSearchSelector } from "$components/SearchSelector/MultipleSearchSelector";
import { IComponentProps } from "./interfaces";
import { ICareer } from "$interfaces/Career";

export const CareerSelector: FunctionComponent<IComponentProps> = ({
  className,
  options,
  translations,
  name
}) => (
  <MultipleSearchSelector<ICareer, ICareer>
    className={className}
    name={name}
    getOptionValue={identity}
    getOptionLabel={({ description }) => description}
    compareValuesBy={({ code }) => code}
    valueToString={({ description }) => description}
    stringToValue={stringValue => {
      const option = options.find(
        ({ description }) => TextFormatter.capitalize(description) === stringValue
      );
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
