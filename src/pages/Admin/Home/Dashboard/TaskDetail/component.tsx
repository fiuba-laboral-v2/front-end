import React, { FunctionComponent, useRef } from "react";
import {
  JobApplicationDetailInfo,
  JobApplicationDetailContent
} from "../../../components/JobApplication";
import { CompanyDetailInfo, CompanyDetailContent } from "../../../components/Company";
import { ApplicantDetailInfo, ApplicantDetailContent } from "../../../components/Applicant";
import { OfferDetailContent } from "./Offer/OfferDetailContent";
import { OfferDetailInfo } from "./Offer/OfferDetailInfo";
import { EmptyDetail } from "./EmptyDetail";
import { APPLICANT, COMPANY, OFFER, JOB_APPLICATION } from "$typenames";
import { ITaskDetailProps } from "./interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TaskDetail: FunctionComponent<ITaskDetailProps> = ({
  selectedTask,
  onStatusUpdate,
  refetchAdminTasks,
  setLoadingStatusUpdate
}) => {
  const contentContainer = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    contentContainer.current?.scrollTo(0, 0);
  };

  let children = <EmptyDetail />;
  if (selectedTask) {
    const selectedTaskUuid = selectedTask.uuid;
    children = (
      <>
        <div className={styles.info}>
          {selectedTask.__typename === COMPANY && (
            <CompanyDetailInfo
              {...{ selectedTaskUuid, onStatusUpdate, refetchAdminTasks, setLoadingStatusUpdate }}
            />
          )}
          {selectedTask.__typename === APPLICANT && (
            <ApplicantDetailInfo
              {...{ selectedTaskUuid, onStatusUpdate, refetchAdminTasks, setLoadingStatusUpdate }}
            />
          )}
          {selectedTask.__typename === OFFER && (
            <OfferDetailInfo
              {...{ selectedTaskUuid, onStatusUpdate, refetchAdminTasks, setLoadingStatusUpdate }}
            />
          )}
          {selectedTask.__typename === JOB_APPLICATION && (
            <JobApplicationDetailInfo
              {...{ selectedTaskUuid, onStatusUpdate, refetchAdminTasks, setLoadingStatusUpdate }}
            />
          )}
        </div>
        <div className={styles.contentContainer} ref={contentContainer}>
          {selectedTask.__typename === COMPANY && (
            <CompanyDetailContent
              companyUuid={selectedTask.uuid}
              scrollToTop={scrollToTop}
              className={classNames(styles.content, styles.fullWidthContent)}
            />
          )}
          {selectedTask.__typename === APPLICANT && (
            <ApplicantDetailContent
              applicantUuid={selectedTask.uuid}
              scrollToTop={scrollToTop}
              className={classNames(styles.content, styles.fullWidthContent)}
            />
          )}
          {selectedTask.__typename === OFFER && (
            <OfferDetailContent
              offerUuid={selectedTask.uuid}
              scrollToTop={scrollToTop}
              className={classNames(styles.content, styles.fullWidthContent)}
            />
          )}
          {selectedTask.__typename === JOB_APPLICATION && (
            <JobApplicationDetailContent
              jobApplicationUuid={selectedTask.uuid}
              scrollToTop={scrollToTop}
              className={styles.content}
            />
          )}
        </div>
      </>
    );
  }
  return (
    <div className={styles.taskDetailContainer}>
      <div
        className={classNames(styles.taskDetail, {
          [styles.jobApplication]: selectedTask?.__typename === JOB_APPLICATION
        })}
      >
        {children}
      </div>
    </div>
  );
};
