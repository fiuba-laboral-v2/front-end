import React, { FunctionComponent } from "react";
import { targetApplicantTypeEnumValues } from "$interfaces/Applicant";
import { IComponentProps } from "./interfaces";
import { SelectField } from "$components/Fields";

const DEFAULT_NAME = "targetApplicantType";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = ({
  translations,
  mandatory,
  name
}) => (
  <SelectField
    mandatory={mandatory}
    fieldName={name || DEFAULT_NAME}
    options={targetApplicantTypeEnumValues.map(option => ({
      label: translations[option],
      value: option
    }))}
    title={translations.title}
  />
);
