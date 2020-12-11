import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { StatusButton } from "../StatusButton";

export const RejectButton: FunctionComponent<IComponent> = props => (
  <StatusButton {...props} kind="danger" status={ApprovalStatus.rejected} Icon={HighlightOffIcon} />
);

interface IComponent {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  loading: boolean;
  hidden?: boolean;
}
