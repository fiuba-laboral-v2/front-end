import React, { FunctionComponent } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const ChangePasswordAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  onClickChangePasswordIcon
}) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={VpnKeyIcon} onClick={onClickChangePasswordIcon} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  onClickChangePasswordIcon: () => void;
}
