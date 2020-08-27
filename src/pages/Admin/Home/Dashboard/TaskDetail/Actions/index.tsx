import React, { FunctionComponent } from "react";

import { StatusButton } from "./StatusButton";
import HistoryIcon from "@material-ui/icons/History";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DoneIcon from "@material-ui/icons/Done";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = (
  {
    currentStatus,
    setStatus
  }
) => (
  <div className={styles.actions}>
    {
      currentStatus !== ApprovalStatus.pending &&
      <StatusButton
        setStatus={setStatus}
        className="secondary"
        status={ApprovalStatus.pending}
        Icon={HistoryIcon}
      />
    }
    {
      currentStatus !== ApprovalStatus.rejected &&
      <StatusButton
        setStatus={setStatus}
        className="danger"
        status={ApprovalStatus.rejected}
        Icon={HighlightOffIcon}
      />
    }
    {
      currentStatus !== ApprovalStatus.approved &&
      <StatusButton
        setStatus={setStatus}
        className="primary"
        status={ApprovalStatus.approved}
        Icon={DoneIcon}
      />
    }
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus) => void;
  currentStatus: ApprovalStatus;
}
