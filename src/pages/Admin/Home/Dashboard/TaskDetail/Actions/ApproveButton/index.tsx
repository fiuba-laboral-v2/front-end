import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { StatusButton } from "../StatusButton";
import DoneIcon from "@material-ui/icons/Done";

export const ApproveButton: FunctionComponent<IComponent> = ({ setStatus }) => (
  <StatusButton
    setStatus={setStatus}
    kind="primary"
    status={ApprovalStatus.approved}
    Icon={DoneIcon}
  />
);

interface IComponent {
  setStatus: (status: ApprovalStatus) => void;
}
