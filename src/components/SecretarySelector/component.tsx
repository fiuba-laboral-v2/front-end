import React, { FunctionComponent } from "react";
import { SecretaryEnumValues } from "$interfaces/Secretary";
import { IComponentProps } from "./interfaces";
import { SelectField } from "$components/Fields";

export const SecretarySelector: FunctionComponent<IComponentProps> = ({
  translations,
  mandatory
}) => (
  <SelectField
    mandatory={mandatory}
    fieldName="secretary"
    options={SecretaryEnumValues.map(option => ({ label: translations[option], value: option }))}
    title={translations.title}
  />
);
