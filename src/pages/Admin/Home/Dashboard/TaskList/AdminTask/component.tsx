import React, { Fragment, FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { StatusLabel } from "$components/StatusLabel";
import styles from "./styles.module.scss";
import { APPLICANT, COMPANY } from "$typenames";

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
      <TimeHumanizer since={adminTask.updatedAt} type="update"/>
    </div>
    <StatusLabel status={adminTask.approvalStatus} useTooltip={true} fixedPosition={true}/>
  </div>;
};

interface IAdminTaskProps {
  adminTask: TAdminTask;
}
