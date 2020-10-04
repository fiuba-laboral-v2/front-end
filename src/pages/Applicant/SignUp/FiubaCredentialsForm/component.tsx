import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { DniField, PasswordField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const FiubaCredentialsForm: FunctionComponent<IComponentProps> = ({ translations }) => (
  <Card>
    <div className={styles.header}>
      <span className={styles.title}>translations.title</span>
      <span className={styles.subtitle}>translations.subtitle</span>
    </div>
    <div className={styles.fields}>
      <div className={styles.dniField} >
        <DniField name="user.dni" label={translations.dni} />
      </div>
      <div>
        <PasswordField
          name="user.password"
          label={translations.password}
          autoComplete="new-password"
          validate={false}
        />
      </div>
    </div>
  </Card>
);
