import React, { FunctionComponent } from "react";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";

export const SharedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    status,
    ...props
  }
) => (
  <StatusLabel
    text={translations[status]}
    tooltipText={translations[status]}
    status={status}
    {...props}
  />
);
