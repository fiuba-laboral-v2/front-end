import React, { FunctionComponent } from "react";
import { TargetApplicantType, targetApplicantTypeEnumValues } from "$interfaces/Offer";
import { FormikValidator } from "$models/FormikValidator";
import { Selector } from "$components/Selector/Selector";
import { IComponentProps } from "./interfaces";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = (
  {
    translations,
    initialValue
  }
) => (
  <Selector<TargetApplicantType, string>
    name="targetApplicantType"
    options={targetApplicantTypeEnumValues}
    label={translations.title}
    validate={FormikValidator({ mandatory: true })}
    getOptionLabel={option => translations[option]}
    getOptionValue={option => option}
    initialValue={initialValue}
  />
);
