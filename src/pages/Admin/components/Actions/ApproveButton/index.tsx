import React, { FunctionComponent } from "react";
import DoneIcon from "@material-ui/icons/Done";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { StatusButton } from "../StatusButton";
import { NotificationRecipient } from "../StatusButton/interfaces";

export const ApproveButton: FunctionComponent<IComponent> = props => (
  <StatusButton {...props} kind="primary" status={ApprovalStatus.approved} Icon={DoneIcon} />
);

interface IComponent {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  notificationRecipient: NotificationRecipient;
  loading: boolean;
  hidden?: boolean;
}
