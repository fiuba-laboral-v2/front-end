import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Actions } from "../Actions";
import { MainTitle } from "../MainTitle";

import styles from "./styles.module.scss";

export const DetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  {
    title,
    createdAt,
    setStatus,
    children
  }
) => <>
  <MainTitle title={title} createdAt={createdAt}/>
  <div className={styles.details}>
    {children}
    <Actions setStatus={setStatus} />
  </div>
</>;

export interface ICompanyDetailInfoProps {
  title: string;
  createdAt: string;
  setStatus: (status: ApprovalStatus) => void;
}
