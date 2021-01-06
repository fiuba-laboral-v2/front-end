import React, { FunctionComponent } from "react";
import { IComponentProps } from "./interfaces";
import { SelectField } from "$components/Fields";

const DEFAULT_NAME = "targetApplicantType";

export const TargetApplicantTypeSelector: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  mandatory,
  name,
  options
}) => (
  <SelectField
    className={className}
    mandatory={mandatory}
    fieldName={name || DEFAULT_NAME}
    options={options}
    title={translations.title}
  />
);
