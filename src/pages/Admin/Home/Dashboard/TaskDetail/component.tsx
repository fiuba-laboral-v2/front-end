import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./Company/CompanyDetailContent";
import { ApplicantDetailContent } from "./Applicant/ApplicantDetailContent";
import { CompanyDetailInfo } from "./Company/CompanyDetailInfo";
import { ApplicantDetailInfo } from "./Applicant/ApplicantDetailInfo";
import { EmptyDetail } from "./EmptyDetail";
import { IApprovable } from "$interfaces/Approvable";
import { APPLICANT, COMPANY } from "$typenames";

import styles from "./styles.module.scss";

export const TaskDetail: FunctionComponent<ITaskDetailProps> = (
  {
    selectedTask,
    onStatusUpdate,
    refetchApprovableEntities
  }
) => {
  let children = <EmptyDetail/>;
  if (selectedTask) {
    children = (
      <>
        <div className={styles.info}>
          {
            selectedTask.__typename === COMPANY &&
            <CompanyDetailInfo
                selectedCompany={selectedTask}
                onStatusUpdate={onStatusUpdate}
                refetchApprovableEntities={refetchApprovableEntities}
            />
          }
          {
            selectedTask.__typename === APPLICANT &&
            <ApplicantDetailInfo selectedApplicant={selectedTask} onStatusUpdate={onStatusUpdate}/>
          }
        </div>
        <div className={styles.content}>
          {
            selectedTask.__typename === COMPANY &&
            <CompanyDetailContent companyUuid={selectedTask.uuid}/>
          }
          {
            selectedTask.__typename === APPLICANT &&
            <ApplicantDetailContent applicantUuid={selectedTask.uuid}/>
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
  refetchApprovableEntities: () => void;
}
