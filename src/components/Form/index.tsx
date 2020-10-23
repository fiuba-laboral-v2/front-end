import React, { FunctionComponent } from "react";
import { AcceptanceCriteria } from "$components/AcceptanceCriteria";
import styles from "./styles.module.scss";

export const Form: FunctionComponent<IFormProps> = ({ title, acceptanceCriteria, children }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    {acceptanceCriteria && (
      <div className={styles.middleContainer}>
        <div className={styles.formContainer}>{children}</div>
        <AcceptanceCriteria className={styles.acceptanceCriteria} text={acceptanceCriteria} />
      </div>
    )}
    {!acceptanceCriteria && children}
  </>
);

interface IFormProps {
  title: string;
  acceptanceCriteria?: string;
}
