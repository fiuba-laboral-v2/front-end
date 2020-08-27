import React, { FunctionComponent } from "react";

import { StatusButton } from "./StatusButton";
import { PendingButton } from "./PendingButton";
import { ApproveButton } from "./ApproveButton";
import { RejectButton } from "./RejectButton";
import HistoryIcon from "@material-ui/icons/History";

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
      <PendingButton setStatus={setStatus}/>
    }
    {
      currentStatus !== ApprovalStatus.rejected &&
      <RejectButton setStatus={setStatus} />
    }
    {
      currentStatus !== ApprovalStatus.approved &&
      <ApproveButton setStatus={setStatus}/>
    }
  </div>
);

export interface IActionsProps {
  setStatus: (status: ApprovalStatus) => void;
  currentStatus: ApprovalStatus;
}
