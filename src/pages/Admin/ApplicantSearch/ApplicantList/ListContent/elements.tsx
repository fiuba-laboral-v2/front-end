import React, { FunctionComponent, Fragment, ReactNode } from "react";
import classNames from "classnames";
import { IApplicant } from "$interfaces/Applicant";
import { CareersData } from "$components/CareersDetail/CareersData";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { APPLICANT_LIST_COLUMNS_VALUES } from "../constants";
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
          [styles.grey]: index % 2 === 0 || index === 0
        })}>
          {children(applicant)}
        </div>

      ))
    }
  </Fragment>
);

interface IText {
  text: string;
  className?: string;
}

const Text: FunctionComponent<IText> = ({ text, className }) => (
  <p className={classNames(styles.text, className && styles[className])}>
    {text}
  </p>
);

interface IItem {
  column: string;
  applicant: IApplicant;
}

export const Item: FunctionComponent<IItem> = ({
  column,
  applicant: {
    user: {
      name,
      surname,
      dni
    },
    padron,
    careers,
    approvalStatus
  }
}) => (
  <Fragment>
    {column === APPLICANT_LIST_COLUMNS_VALUES.NAMES && (
      <Text
        className={"names"}
        text={`${name} ${surname}`}
      />
    )}
    {column === APPLICANT_LIST_COLUMNS_VALUES.PADRON && (
      <Text
        text={`${padron}`}
      />
    )}
    {column === APPLICANT_LIST_COLUMNS_VALUES.DNI && (
      <Text
        text={`${dni}`}
      />
    )}
    {column === APPLICANT_LIST_COLUMNS_VALUES.STUDIES && (
      <div className={styles.careersContainer}>
        <CareersData className={styles.careers} careers={careers} withSubjects={false} />
      </div>
    )}
    {column === APPLICANT_LIST_COLUMNS_VALUES.STATE && (
      <div className={styles.statusContainer}>
        <SharedStatusLabel
          status={approvalStatus}
          withTooltip
          background="dark"
          width="square"
        />
      </div>
    )}
  </Fragment>
);
