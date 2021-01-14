import React, { FunctionComponent } from "react";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "$components/IconButton";

export const ActivateAccountAction: FunctionComponent<IComponentProps> = ({
  tooltipMessage,
  link
}) => (
  <Tooltip title={tooltipMessage}>
    <div>
      <IconButton Icon={LibraryAddCheckIcon} link={link} />
    </div>
  </Tooltip>
);

interface IComponentProps {
  tooltipMessage: string;
  link: string;
}
