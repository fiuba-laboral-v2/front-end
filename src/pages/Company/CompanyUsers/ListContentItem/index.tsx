import React, { FunctionComponent } from "react";
import { TimeFormatter } from "$models/TimeFormatter";
import { ICompanyUser } from "$interfaces/CompanyUser";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IComponentProps> = ({
  companyUser: {
    user: { name, surname, email }
  }
}) => (
  <>
    <p className={styles.text}>{`${name} ${surname}`}</p>
    <p className={styles.text}>{email}</p>
    <div className={styles.text}>{TimeFormatter.dateTime("")}</div>
  </>
);

interface IComponentProps {
  companyUser: ICompanyUser;
}
