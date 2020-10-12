import React, { FunctionComponent } from "react";

import { DniField, PasswordField } from "$components/Fields";
import { FormSection } from "$components/FormSection";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const FiubaCredentialsFormSection: FunctionComponent<IComponentProps> = (
  {
    className,
    translations
  }
) => (
  <FormSection
    className={className}
    mediumPaddingBottom
    title={translations.title}
    subtitle={translations.subtitle}
  >
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
  </FormSection>
);
