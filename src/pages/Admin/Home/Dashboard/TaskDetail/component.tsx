import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./Company/CompanyDetailContent";
import { ApplicantDetailContent } from "./Applicant/ApplicantDetailContent";
import { CompanyDetailInfo } from "./Company/CompanyDetailInfo";
import { EmptyDetail } from "./EmptyDetail";
import { IApprovable } from "$interfaces/Approvable";
import { COMPANY, APPLICANT } from "$typenames";

import styles from "./styles.module.scss";

export const TaskDetail: FunctionComponent<ITaskDetailProps> = (
  {
    selectedTask,
    onStatusUpdate
  }
) => {
  let children = <EmptyDetail/>;
  if (selectedTask) {
    children = (
      <>
        <div className={styles.info}>
          {
            selectedTask.__typename === COMPANY &&
            <CompanyDetailInfo selectedCompany={selectedTask} onStatusUpdate={onStatusUpdate}/>
          }
        </div>
        <div className={styles.content}>
          {
            selectedTask.__typename === COMPANY &&
            <CompanyDetailContent selectedCompany={selectedTask}/>
          }
          {
            selectedTask.__typename === APPLICANT &&
            <ApplicantDetailContent selectedApplicant={selectedTask}/>
          }
        </div>
      </>
    );
  }
  return <div className={styles.taskDetail}>{children}</div>;
};

interface ITaskDetailProps {
  selectedTask?: IApprovable;
  onStatusUpdate: () => void;
}
