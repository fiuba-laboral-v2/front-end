import React, { FunctionComponent } from "react";
import { ChangePasswordAction } from "./ChangePasswordAction";
import { IComponentProps } from "./interfaces";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  hideChangePasswordIcon,
  onClickChangePasswordIcon,
  translations
}) => (
  <div className={className}>
    {!hideChangePasswordIcon() && (
      <ChangePasswordAction
        onClickChangePasswordIcon={onClickChangePasswordIcon}
        tooltipMessage={translations.passwordTooltipMessage}
      />
    )}
  </div>
);
