import React, { FunctionComponent } from "react";

import Button from "$components/Button";
import { TimeHumanizer } from "$components/TimeHumanizer";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";

import styles from "./styles.module.scss";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  { setStatus, company }
) => <>
  <div className={styles.header}>
    <div className={styles.main}>
      <p className={styles.title}>
        Registro de Empresa
      </p>
      <TimeHumanizer since={"1592951226327"}/>
    </div>
    <p className={styles.companyName}>
      {company.companyName}
    </p>
  </div>
  <div className={styles.details}>
    <div className={styles.userDetails}>
      <p>
        Usuario:
        <span className={styles.userInfo}>Marta Meli</span>
      </p>
      <p>
        Email:
        <span className={styles.userInfo}>martameli@mercadolibre.com</span>
      </p>
      <p>
        Cuit:
        <span className={styles.userInfo}>{company.cuit}</span>
      </p>
    </div>
    <div className={styles.actions}>
      <Button
        className="primary"
        onClick={() => setStatus(ApprovalStatus.approved)}
      >
        Aprobar
      </Button>
      <Button
        className="danger"
        onClick={() => setStatus(ApprovalStatus.rejected)}
      >
        Rechazar
      </Button>
    </div>
  </div>
</>;

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  company: ICompany;
}
