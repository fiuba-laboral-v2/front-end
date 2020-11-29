import React, { FunctionComponent } from "react";
import Badge from "@material-ui/core/Badge";
import MaterialUiNotificationsIcon from "@material-ui/icons/Notifications";

export const NotificationsIcon: FunctionComponent<IComponentProps> = ({ unread }) => (
  <Badge color="secondary" variant="dot" invisible={!unread}>
    <MaterialUiNotificationsIcon />
  </Badge>
);

interface IComponentProps {
  unread?: boolean;
}
