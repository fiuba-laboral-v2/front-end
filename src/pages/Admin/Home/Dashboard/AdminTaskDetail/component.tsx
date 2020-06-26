import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./CompanyDetailContent";
import { CompanyDetailInfo } from "./CompanyDetailInfo";
import { EmptyDetailContent } from "./EmptyDetailContent";
import { IApprovable } from "$interfaces/Approvable";

import styles from "./styles.module.scss";

export const AdminTaskDetail: FunctionComponent<IAdminTaskDetailProps> = (
  {
    selectedTask
  }
) => (
  <>
    <div className={styles.info}>
      {
        selectedTask?.__typename === "Company" &&
        <CompanyDetailInfo selectedCompany={selectedTask}/>
      }
    </div>
    <div className={styles.content}>
      {
        !selectedTask &&
        <EmptyDetailContent/>
      }
      {
        selectedTask?.__typename === "Company" &&
        <CompanyDetailContent selectedCompany={selectedTask}/>
      }
    </div>
  </>
);

interface IAdminTaskDetailProps {
  selectedTask?: IApprovable;
}
