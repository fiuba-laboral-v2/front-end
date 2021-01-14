import React, { FunctionComponent } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const DeactivateAccountAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  link
}) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={DeleteIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  link: string;
}
