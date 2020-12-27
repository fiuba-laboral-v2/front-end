import React, { FunctionComponent } from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const ChangePasswordAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  link
}) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={VpnKeyIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  link: string;
}
