import React, { FunctionComponent } from "react";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const EditUserAction: FunctionComponent<IComponentProps> = ({ tooltipMessage, link }) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={EditIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  link: string;
}
