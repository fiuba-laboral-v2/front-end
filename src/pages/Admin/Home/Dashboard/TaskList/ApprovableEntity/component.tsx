import React, { Fragment, FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import { CompanyIcon } from "../../CompanyIcon/component";
import styles from "./styles.module.scss";

export const ApprovableEntity: FunctionComponent<IApprovableEntityProps> = (
  { approvableEntity }
) => {
  let name = "";
  let Icon: FunctionComponent<{ className?: string }> = Fragment;

  if (approvableEntity.__typename === "Company") {
    name = approvableEntity.companyName;
    Icon = CompanyIcon;
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
