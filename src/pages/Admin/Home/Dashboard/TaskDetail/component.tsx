import React, { FunctionComponent, useRef } from "react";
import { CompanyDetailContent } from "./Company/CompanyDetailContent";
import { ApplicantDetailContent } from "./Applicant/ApplicantDetailContent";
import { CompanyDetailInfo } from "./Company/CompanyDetailInfo";
import { ApplicantDetailInfo } from "./Applicant/ApplicantDetailInfo";
import { EmptyDetail } from "./EmptyDetail";
import { TAdminTask } from "$interfaces/AdminTask";
import { APPLICANT, COMPANY } from "$typenames";

import styles from "./styles.module.scss";

export const TaskDetail: FunctionComponent<ITaskDetailProps> = (
  {
    selectedTask,
    onStatusUpdate,
    refetchAdminTasks
  }
) => {
  const contentContainer = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    contentContainer.current?.scrollTo(0, 0);
  };

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
                refetchAdminTasks={refetchAdminTasks}
            />
          }
          {
            selectedTask.__typename === APPLICANT &&
            <ApplicantDetailInfo
                selectedApplicant={selectedTask}
                onStatusUpdate={onStatusUpdate}
                refetchAdminTasks={refetchAdminTasks}
            />
          }
        </div>
        <div className={styles.content} ref={contentContainer}>
          {
            selectedTask.__typename === COMPANY &&
            <CompanyDetailContent
                companyUuid={selectedTask.uuid}
                scrollToTop={scrollToTop}
            />
          }
          {
            selectedTask.__typename === APPLICANT &&
            <ApplicantDetailContent
                applicantUuid={selectedTask.uuid}
                scrollToTop={scrollToTop}
            />
          }
        </div>
      </>
    );
  }
  return <div className={styles.taskDetail}>{children}</div>;
};

interface ITaskDetailProps {
  selectedTask?: TAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
