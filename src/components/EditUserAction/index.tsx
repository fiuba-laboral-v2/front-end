import React, { FunctionComponent } from "react";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const EditUserAction: FunctionComponent<IComponentProps> = ({
  className,
  tooltipMessage,
  link
}) => (
  <Tooltip title={tooltipMessage}>
    <div className={className}>
      <IconButton Icon={EditIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  className?: string;
  tooltipMessage: string;
  link: string;
}
