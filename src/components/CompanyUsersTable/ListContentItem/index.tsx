import React, { FunctionComponent } from "react";
import { TimeFormatter } from "$models/TimeFormatter";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { Actions } from "./Actions";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { VisibleAction } from "../index";

export const ListContentItem: FunctionComponent<IComponentProps> = ({
  companyUser,
  visibleActions
}) => (
  <>
    <p className={styles.text}>{`${companyUser.user.name} ${companyUser.user.surname}`}</p>
    <p className={styles.text}>{companyUser.user.email}</p>
    <p className={styles.text}>{companyUser.position}</p>
    <div className={styles.text}>{TimeFormatter.dateTime(companyUser.createdAt)}</div>
    {visibleActions.length > 0 && (
      <div className={classNames(styles.text, styles.actionsContainer)}>
        <Actions visibleActions={visibleActions} companyUser={companyUser} />
      </div>
    )}
  </>
);

interface IComponentProps {
  companyUser: ICompanyUser;
  visibleActions: VisibleAction[];
}
