import React, { FunctionComponent } from "react";

import { TimeHumanizer } from "$components/TimeHumanizer";

import { ICompany } from "$interfaces/Company";

import styles from "./styles.module.scss";

export const MainTitle: FunctionComponent<IMainTitleProps> = (
  { company }
) =>
<div className={styles.header}>
  <div className={styles.main}>
    <p className={styles.title}>
      Registro de Empresa
    </p>
    <TimeHumanizer since={"1592951226327"}/>
  </div>
</div>;

export interface IMainTitleProps {
  company: ICompany;
}
