import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Card } from "$components/Card";
import { EmailField, UrlField } from "$components/Fields";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const ContactInformationFormSection: FunctionComponent<IComponentProps> = (
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
    <EmailField name="email" label={translations.email} withoutMargin />
    <UrlField name="website" label={translations.website} withoutMargin />
  </Card>
);
