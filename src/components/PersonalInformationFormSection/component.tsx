import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { EmailField, NameField } from "$components/Fields";
import { FormSection } from "$components/FormSection";
import { IComponent } from "./interfaces";
import { PositiveIntegerField } from "$components/Fields";
import styles from "./styles.module.scss";

export const PersonalInformationFormSection: FunctionComponent<IComponent> = ({
  className,
  withoutPadron,
  translations
}) => (
  <FormSection className={className} title={translations.title}>
    <div className={styles.firstRow}>
      <NameField
        className={styles.name}
        mandatory
        name="user.name"
        label={translations.name}
        withoutMargin
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
      <EmailField
        className={classNames(styles.email, { [styles.withoutMargin]: withoutPadron })}
        mandatory
        name="user.email"
        label={translations.email}
        withoutMargin
      />
      {!withoutPadron && (
        <PositiveIntegerField
          className={styles.padron}
          mandatory
          name="padron"
          label={translations.padron}
          withoutMargin
        />
      )}
    </div>
  </FormSection>
);
