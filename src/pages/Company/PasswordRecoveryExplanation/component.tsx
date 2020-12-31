import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { IComponents } from "./interfaces";
import styles from "./styles.module.scss";

export const PasswordRecoveryExplanation: FunctionComponent<IComponents> = ({ translations }) => (
  <>
    <h1 className={styles.title}>{translations?.title}</h1>
    <Card className={styles.explanation}>{translations?.explanation}</Card>
  </>
);
