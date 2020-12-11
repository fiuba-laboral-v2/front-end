import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { StatusButton } from "../StatusButton";
import DoneIcon from "@material-ui/icons/Done";

export const ApproveButton: FunctionComponent<IComponent> = props => (
  <StatusButton {...props} kind="primary" status={ApprovalStatus.approved} Icon={DoneIcon} />
);

interface IComponent {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  loading: boolean;
  hidden?: boolean;
}
