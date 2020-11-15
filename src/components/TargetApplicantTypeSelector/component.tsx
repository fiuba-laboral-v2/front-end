import React, { FunctionComponent } from "react";
import { targetApplicantTypeEnumValues } from "$interfaces/Applicant";
import { IComponentProps } from "./interfaces";
import { SelectField } from "$components/Fields";

const name = "targetApplicantType";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = ({
  translations,
  mandatory
}) => (
  <SelectField
    mandatory={mandatory}
    fieldName={name}
    options={targetApplicantTypeEnumValues.map(option => ({
      label: translations[option],
      value: option
    }))}
    title={translations.title}
  />
);
