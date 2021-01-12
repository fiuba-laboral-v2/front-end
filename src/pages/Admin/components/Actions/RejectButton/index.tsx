import React, { FunctionComponent } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { StatusButton } from "../StatusButton";
import { NotificationRecipient } from "../StatusButton/interfaces";

export const RejectButton: FunctionComponent<IComponent> = props => (
  <StatusButton {...props} kind="danger" status={ApprovalStatus.rejected} Icon={HighlightOffIcon} />
);

interface IComponent {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  loading: boolean;
  notificationRecipient: NotificationRecipient;
  hidden?: boolean;
}
