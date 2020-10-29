import React, { FunctionComponent } from "react";

import { NameField, PasswordField, EmailField } from "$components/Fields";
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
        required
        className={styles.name}
        name="user.name"
        label={translations.name}
        withoutMargin
      />
      <NameField
        required
        className={styles.surname}
        name="user.surname"
        label={translations.surname}
        withoutMargin
      />
    </div>
    <div className={styles.secondRow}>
      <PasswordField
        required
        className={styles.password}
        name="user.password"
        label={translations.password}
        validate
        autoComplete="new-password"
      />
      <PasswordField
        required
        className={styles.passwordConfirm}
        name="user.passwordConfirm"
        label={translations.passwordConfirm}
        validate={false}
        autoComplete="new-password"
        withoutMargin
      />
    </div>
    <EmailField
      required
      className={styles.email}
      name="user.email"
      label={translations.email}
      helperText={translations.emailClarification}
      withoutMargin
    />
  </FormSection>
);
