import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Actions } from "../Actions";

import styles from "./styles.module.scss";

export const DetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  {
    mainTitle,
    setStatus,
    children
  }
) => <>
  {mainTitle}
  <div className={styles.details}>
    {children}
    <Actions setStatus={setStatus} />
  </div>
</>;

export interface ICompanyDetailInfoProps {
  mainTitle: React.ReactElement;
  setStatus: (status: ApprovalStatus) => void;
}
