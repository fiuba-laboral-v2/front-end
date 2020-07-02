import React, { Fragment, FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { CompanyIcon } from "../../CompanyIcon";
import { ApplicantIcon } from "../../ApplicantIcon";
import styles from "./styles.module.scss";
import { COMPANY, APPLICANT } from "$typenames";

export const ApprovableEntity: FunctionComponent<IApprovableEntityProps> = (
  { approvableEntity }
) => {
  let name = "";
  let Icon: FunctionComponent<{ className?: string }> = Fragment;

  if (approvableEntity.__typename === COMPANY) {
    name = approvableEntity.companyName;
    Icon = CompanyIcon;
  }

  if (approvableEntity.__typename === APPLICANT) {
    name = `${approvableEntity.user.name} ${approvableEntity.user.surname}`;
    Icon = ApplicantIcon;
  }

  return <div className={styles.approvableEntity}>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
    </div>
    <Icon/>
  </div>;
};

interface IApprovableEntityProps {
  approvableEntity: IApprovable;
}