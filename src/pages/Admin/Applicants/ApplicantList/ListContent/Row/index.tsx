import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import { IApplicant } from "$interfaces/Applicant";
import styles from "./styles.module.scss";

interface IRows {
  applicants: IApplicant[];
  children: (applicant: IApplicant) => ReactNode;
}

export const Row: FunctionComponent<IRows> = ({ applicants, children }) => (
  <div className={styles.rowsContainer}>
    {
      applicants.map(applicant => (
        <div key={applicant.uuid} className={classNames(styles.row)}>
          {children(applicant)}
        </div>
      ))
    }
  </div>
);
