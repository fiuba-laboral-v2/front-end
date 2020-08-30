import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { StatusButton } from "../StatusButton";
import HistoryIcon from "@material-ui/icons/History";

export const PendingButton: FunctionComponent<IComponent> = ({ setStatus }) => (
  <StatusButton
    setStatus={setStatus}
    className="secondary"
    status={ApprovalStatus.pending}
    Icon={HistoryIcon}
  />
);

interface IComponent {
  setStatus: (status: ApprovalStatus) => void;
}
