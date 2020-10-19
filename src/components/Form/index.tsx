import React, { FunctionComponent } from "react";

import { Window } from "$components/Window";
import { AcceptanceCriteria } from "$components/AcceptanceCriteria";
import styles from "./styles.module.scss";

export const Form: FunctionComponent<IFormProps> = ({ title, acceptanceCriteria, children }) => (
  <Window>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.middleContainer}>
      <div className={styles.formContainer}>{children}</div>
      <AcceptanceCriteria className={styles.acceptanceCriteria} text={acceptanceCriteria} />
    </div>
  </Window>
);

interface IFormProps {
  title: string;
  acceptanceCriteria: string;
}
