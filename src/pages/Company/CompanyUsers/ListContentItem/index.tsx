import React, { FunctionComponent } from "react";
import { TimeFormatter } from "$models/TimeFormatter";
import { ICompanyUser } from "$interfaces/CompanyUser";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IComponentProps> = ({
  companyUser: {
    role,
    user: { name, surname, email },
    createdAt
  }
}) => (
  <>
    <p className={styles.text}>{`${name} ${surname}`}</p>
    <p className={styles.text}>{email}</p>
    <p className={styles.text}>{role}</p>
    <div className={styles.text}>{TimeFormatter.dateTime(createdAt)}</div>
  </>
);

interface IComponentProps {
  companyUser: ICompanyUser;
}
