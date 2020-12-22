import React, { FunctionComponent } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Tooltip from "@material-ui/core/Tooltip";
import { IComponentProps } from "./interfaces";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  hideChangePasswordIcon,
  onClickChangePasswordIcon,
  translations
}) => (
  <div className={className}>
    {!hideChangePasswordIcon() && (
      <Tooltip title={translations.passwordTooltipMessage}>
        <VpnKeyIcon fontSize="small" onClick={onClickChangePasswordIcon} />
      </Tooltip>
    )}
  </div>
);
