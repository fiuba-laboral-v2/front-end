import React, { FunctionComponent } from "react";
import { IComponentProps } from "./interfaces";
import { SelectField } from "$components/Fields";

export const OfferStatusSelector: FunctionComponent<IComponentProps> = ({
  className,
  title,
  mandatory,
  name,
  options
}) => (
  <SelectField
    className={className}
    mandatory={mandatory}
    fieldName={name}
    options={options}
    title={title}
  />
);
