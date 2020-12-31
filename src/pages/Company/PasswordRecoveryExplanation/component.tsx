import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponents } from "./interfaces";
import styles from "./styles.module.scss";

export const PasswordRecoveryExplanation: FunctionComponent<IComponents> = ({
  translations,
  onRetry
}) => (
  <>
    <h1 className={styles.title}>{translations?.title}</h1>
    <div className={styles.explanation}>{translations?.explanation}</div>
    <Button onClick={onRetry} kind="primary" className={styles.retry}>
      {translations?.retry}
    </Button>
  </>
);
