import React, { FunctionComponent } from "react";
import { TargetApplicantType } from "$interfaces/Offer";
import { FormikValidator } from "$models/FormikValidator";
import { Selector } from "$components/Selector/Selector";
import { IComponentProps } from "./interfaces";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = (
  {
    label,
    initialValue
  }
) => (
  <Selector
    name="targetApplicantType"
    options={Object.keys(TargetApplicantType)}
    label={label}
    validate={FormikValidator({ mandatory: true })}
    getOptionLabel={option => option}
    getOptionValue={option => option}
    initialValue={initialValue}
  />
);
