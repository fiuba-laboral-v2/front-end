import React, { Fragment, FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { PendingLabel } from "$components/PendingLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import styles from "./styles.module.scss";
import { APPLICANT, COMPANY } from "$typenames";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const AdminTask: FunctionComponent<IAdminTaskProps> = ({ adminTask }) => {
  let name = "";
  let Icon: FunctionComponent<{ className?: string }> = Fragment;

  if (adminTask.__typename === COMPANY) {
    name = adminTask.companyName;
    Icon = CompanyIcon;
  }

  if (adminTask.__typename === APPLICANT) {
    name = `${adminTask.user.name} ${adminTask.user.surname}`;
    Icon = ApplicantIcon;
  }

  return <div className={styles.adminTask}>
    <Icon className={styles.icon}/>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <TimeHumanizer since={adminTask.createdAt}/>
    </div>
    {
      adminTask.approvalStatus === ApprovalStatus.approved &&
      <ApprovedLabel className={styles.label} withText={false}/>
    }
    {
      adminTask.approvalStatus === ApprovalStatus.rejected &&
      <RejectedLabel className={styles.label} withText={false}/>
    }
    {
      adminTask.approvalStatus === ApprovalStatus.pending &&
      <PendingLabel className={styles.label} withText={false}/>
    }
  </div>;
};

interface IAdminTaskProps {
  adminTask: TAdminTask;
}
