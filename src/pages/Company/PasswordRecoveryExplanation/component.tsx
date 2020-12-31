import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { Button } from "$components/Button";
import { IComponents } from "./interfaces";
import styles from "./styles.module.scss";

export const PasswordRecoveryExplanation: FunctionComponent<IComponents> = ({
  translations,
  onRetry
}) => (
  <>
    <h1 className={styles.title}>{translations?.title}</h1>
    <Card className={styles.explanation}>{translations?.explanation}</Card>
    <Button onClick={onRetry} kind="primary" className={styles.retry}>
      {translations?.retry}
    </Button>
  </>
);
