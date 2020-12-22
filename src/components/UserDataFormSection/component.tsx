import React, { FunctionComponent } from "react";

import { NameField, PasswordField, EmailField, TextField } from "$components/Fields";
import { FormSection } from "$components/FormSection";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const UserDataFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className} title={translations.title}>
    <div className={styles.firstRow}>
      <NameField
        autoFocus
        className={styles.name}
        mandatory
        name="user.name"
        label={translations.name}
      />
      <NameField
        className={styles.surname}
        mandatory
        name="user.surname"
        label={translations.surname}
        withoutMargin
      />
    </div>
    <div className={styles.secondRow}>
      <PasswordField
        mandatory
        className={styles.password}
        name="user.password"
        label={translations.password}
        validate
        autoComplete="new-password"
      />
      <PasswordField
        mandatory
        className={styles.passwordConfirm}
        name="user.passwordConfirm"
        label={translations.passwordConfirm}
        validate
        autoComplete="new-password"
        withoutMargin
      />
    </div>
    <div className={styles.thirdRow}>
      <EmailField
        mandatory
        className={styles.email}
        name="user.email"
        label={translations.email}
        helperText={translations.emailClarification}
        withoutMargin
      />
      <TextField
        mandatory
        className={styles.position}
        name="user.position"
        label={translations.position}
        withoutMargin
      />
    </div>
  </FormSection>
);
