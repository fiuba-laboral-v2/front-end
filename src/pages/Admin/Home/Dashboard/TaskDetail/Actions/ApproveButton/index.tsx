import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { StatusButton } from "../StatusButton";
import DoneIcon from "@material-ui/icons/Done";

export const ApproveButton: FunctionComponent<IComponent> = ({ setStatus, loading, hidden }) => (
  <StatusButton
    {...{ setStatus, loading, hidden }}
    kind="primary"
    status={ApprovalStatus.approved}
    Icon={DoneIcon}
  />
);

interface IComponent {
  setStatus: (status: ApprovalStatus) => Promise<void>;
  loading: boolean;
  hidden?: boolean;
}
