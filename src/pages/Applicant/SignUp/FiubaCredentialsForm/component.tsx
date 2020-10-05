import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { Card } from "$components/Card";
import { DniField, PasswordField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const FiubaCredentialsForm: FunctionComponent<IComponentProps> = (
  {
    className,
    translations
  }
) => (
  <Card largePadding className={classNames(styles.card, className)}>
    <div className={styles.header}>
      <span className={styles.title}>{translations.title}</span>
      <span className={styles.subtitle}>{translations.subtitle}</span>
    </div>
    <div className={styles.fields}>
      <DniField
        className={styles.dniField}
        name="user.dni"
        label={translations.dni}
        withoutMargin
      />
      <PasswordField
        className={styles.passwordField}
        name="user.password"
        label={translations.password}
        autoComplete="new-password"
        validate={false}
        withoutMargin
      />
    </div>
  </Card>
);
