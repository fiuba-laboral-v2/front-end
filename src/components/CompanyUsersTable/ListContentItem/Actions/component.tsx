import React, { FunctionComponent } from "react";
import { ChangePasswordAction } from "./ChangePasswordAction";
import { IComponentProps } from "./interfaces";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  hideChangePasswordIcon,
  link,
  translations
}) => (
  <div className={className}>
    {!hideChangePasswordIcon() && (
      <ChangePasswordAction link={link} tooltipMessage={translations.passwordTooltipMessage} />
    )}
  </div>
);
