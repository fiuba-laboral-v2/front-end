import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { StatusButton } from "../StatusButton";

export const RejectButton: FunctionComponent<IComponent> = ({ setStatus }) => (
  <StatusButton
    setStatus={setStatus}
    kind="danger"
    status={ApprovalStatus.rejected}
    Icon={HighlightOffIcon}
  />
);

interface IComponent {
  setStatus: (status: ApprovalStatus) => void;
}
