import React, { FunctionComponent } from "react";
import { NameField } from "$components/Fields/NameField";
import { IUserEditFieldsProps } from "./interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const UserEditFields: FunctionComponent<IUserEditFieldsProps> = (
  {
    className,
    name,
    surname,
    translations
  }
) => (
  <div className={classNames(styles.fullName, className)}>
    <NameField
      className={styles.name}
      name={name}
      label={translations.name}
      withoutMargin
    />
    <NameField
      className={styles.surname}
      name={surname}
      label={translations.surname}
      withoutMargin
    />
  </div>
);
