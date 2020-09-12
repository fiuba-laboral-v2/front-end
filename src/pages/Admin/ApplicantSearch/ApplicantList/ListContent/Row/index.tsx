import React, { FunctionComponent, Fragment, ReactNode } from "react";
import classNames from "classnames";
import { IApplicant } from "$interfaces/Applicant";
import styles from "./styles.module.scss";

interface IRows {
  applicants: IApplicant[];
  children: (applicant: IApplicant) => ReactNode;
}

export const Row: FunctionComponent<IRows> = ({ applicants, children }) => (
  <Fragment>
    {
      applicants.map((applicant, index) => (
        <div key={applicant.uuid} className={classNames(styles.row, {
          [styles.grey]: index % 2 === 0
        })}>
          {children(applicant)}
        </div>

      ))
    }
  </Fragment>
);
