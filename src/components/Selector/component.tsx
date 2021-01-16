import React from "react";
import { SelectField } from "$components/Fields";
import { IComponentProps } from "./interfaces";

export const Selector = <Option,>({
  className,
  title,
  mandatory,
  name,
  options
}: IComponentProps<Option>) => (
  <SelectField
    className={className}
    mandatory={mandatory}
    fieldName={name}
    options={options}
    title={title}
  />
);
