import React, { FunctionComponent } from "react";

import Button from "$components/Button";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IActionsProps } from "./interaces";

import styles from "./styles.module.scss";
import HistoryIcon from "@material-ui/icons/History";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DoneIcon from "@material-ui/icons/Done";

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
      <Button
        className="danger"
        onClick={() => setStatus(ApprovalStatus.rejected)}
      >
        <HighlightOffIcon className={styles.icons} fontSize="small"/>
        {translations.reject}
      </Button>
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
