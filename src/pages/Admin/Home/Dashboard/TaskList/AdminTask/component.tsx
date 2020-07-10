import React, { Fragment, FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import styles from "./styles.module.scss";
import { APPLICANT, COMPANY } from "$typenames";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const AdminTask: FunctionComponent<IAdminTaskProps> = (
  { adminTask }
) => {
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
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <TimeHumanizer since={adminTask.createdAt}/>
    </div>
    <Icon className={styles.icon}/>
  </div>;
};

interface IAdminTaskProps {
  adminTask: TAdminTask;
}
