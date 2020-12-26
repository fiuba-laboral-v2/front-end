import React, { FunctionComponent } from "react";
import { TimeFormatter } from "$models/TimeFormatter";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { Actions } from "./Actions";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IComponentProps> = ({
  companyUser,
  withoutActions
}) => (
  <>
    <p className={styles.text}>{`${companyUser.user.name} ${companyUser.user.surname}`}</p>
    <p className={styles.text}>{companyUser.user.email}</p>
    <p className={styles.text}>{companyUser.position}</p>
    <div className={styles.text}>{TimeFormatter.dateTime(companyUser.createdAt)}</div>
    {!withoutActions && (
      <div className={styles.text}>
        <Actions companyUser={companyUser} />
      </div>
    )}
  </>
);

interface IComponentProps {
  companyUser: ICompanyUser;
  withoutActions?: boolean;
}
