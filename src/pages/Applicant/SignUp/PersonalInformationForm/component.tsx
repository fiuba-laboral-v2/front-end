import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { EmailField, NameField } from "$components/Fields";
import { NumberInput } from "$components/NumberInput";
import { Card } from "$components/Card";

import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const PersonalInformationForm: FunctionComponent<IComponent> = (
  {
    className,
    translations
  }
) => (
  <Card className={classNames(styles.card, className)}>
    <div className={styles.title}>{translations.title}</div>
    <div className={styles.firstRow}>
      <div className={styles.name}>
        <NameField name="user.name" label={translations.name} />
      </div>
      <div className={styles.surname}>
        <NameField name="user.surname" label={translations.surname} />
      </div>
    </div>
    <div className={styles.secondRow}>
      <div className={styles.email}>
        <EmailField name="user.email" label={translations.email} />
      </div>
      <div className={styles.padron}>
        <NumberInput
          name="padron"
          label={translations.padron}
          validate={FormikValidator({
            validator: validateIntegerInRange({ min: { value: 0, include: false } }),
            mandatory: true
          })}
        />
      </div>
    </div>
  </Card>
);
