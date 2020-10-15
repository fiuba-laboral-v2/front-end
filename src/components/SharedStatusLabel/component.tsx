import React, { FunctionComponent } from "react";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";

export const SharedStatusLabel: FunctionComponent<IComponentProps> = ({
  translations,
  status,
  withTooltip,
  ...props
}) => (
  <StatusLabel
    status={status}
    {...(!withTooltip && { text: translations[status] })}
    {...(withTooltip && { tooltipText: translations[status] })}
    {...props}
  />
);
