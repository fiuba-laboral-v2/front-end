import React, { FunctionComponent } from "react";

import Button from "$components/Button";
import { RejectButton } from "./RejectButton";
import HistoryIcon from "@material-ui/icons/History";
import DoneIcon from "@material-ui/icons/Done";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IActionsProps } from "./interaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IActionsProps> = (
  {
    currentStatus,
    setStatus,
    translations
  }
) => (
  <div className={styles.actions}>
    {
      currentStatus !== ApprovalStatus.pending &&
      <Button
        className="secondary"
        onClick={() => setStatus(ApprovalStatus.pending)}
      >
        <HistoryIcon className={styles.icons} fontSize="small"/>
        {translations.pending}
      </Button>
    }
    {
      currentStatus !== ApprovalStatus.rejected &&
      <RejectButton setStatus={setStatus} className={styles.icons}/>
    }
    {
      currentStatus !== ApprovalStatus.approved &&
      <Button
        className="primary"
        onClick={() => setStatus(ApprovalStatus.approved)}
      >
        <DoneIcon className={styles.icons} fontSize="small"/>
        {translations.approve}
      </Button>
    }
  </div>
);
