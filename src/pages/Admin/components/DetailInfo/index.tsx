import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Actions } from "../Actions";
import { NotificationRecipient } from "../Actions/StatusButton/interfaces";

import styles from "./styles.module.scss";

export const DetailInfo: FunctionComponent<ICompanyDetailInfoProps> = ({
  mainTitle,
  setStatus,
  loading,
  notificationRecipient,
  currentStatus,
  children,
  hidden,
  hideActions
}) => (
  <>
    {mainTitle}
    <div className={styles.details} hidden={hidden}>
      {children}
      {!hideActions && (
        <Actions
          loading={loading}
          setStatus={setStatus}
          notificationRecipient={notificationRecipient}
          currentStatus={currentStatus}
        />
      )}
    </div>
  </>
);

export interface ICompanyDetailInfoProps {
  currentStatus?: ApprovalStatus;
  mainTitle: React.ReactElement;
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  loading: boolean;
  hidden: boolean;
  notificationRecipient: NotificationRecipient;
  hideActions?: boolean;
}
