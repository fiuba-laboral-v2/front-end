import React, { FunctionComponent } from "react";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const ActivateAccountAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  link
}) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={RestoreFromTrashIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  link: string;
}
