import React, { FunctionComponent } from "react";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";

export const SharedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    status,
    withTooltip,
    ...props
  }
) => (
  <StatusLabel
    text={translations[status]}
    {...(withTooltip && { tooltipText: translations[status] })}
    status={status}
    {...props}
  />
);
