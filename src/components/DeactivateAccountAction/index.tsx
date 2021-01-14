import React, { FunctionComponent } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const DeactivateAccountAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  link
}) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={AccountBoxIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  link: string;
}
