import React, { FunctionComponent } from "react";

import { TimeHumanizer } from "$components/TimeHumanizer";

import { ICompany } from "$interfaces/Company";

import styles from "./styles.module.scss";

export const MainTitle: FunctionComponent<IMainTitleProps> = (
  { company, title }
) =>
<div className={styles.header}>
  <div className={styles.main}>
    <p className={styles.title}>
      {title}
    </p>
    <TimeHumanizer since={company.createdAt}/>
  </div>
</div>;

export interface IMainTitleProps {
  company: ICompany;
  title: string;
}
