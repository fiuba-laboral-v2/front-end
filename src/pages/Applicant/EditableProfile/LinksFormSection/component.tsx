import React, { FunctionComponent } from "react";

import { Card } from "$components/Card";
import { TextInput } from "$components/TextInput";
import { FormSet } from "$components/FormSet";

import { FormikValidator } from "$models/FormikValidator";
import { validateURL } from "validations-fiuba-laboral-v2";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const LinksFormSection: FunctionComponent<IComponent> = (
  {
    className,
    translations,
    links
  }
) => (
  <Card largePadding className={className}>
    <FormSet
      title={translations.links}
      name="links"
      values={links}
      defaultValue={{ url: "", name: "" }}
      fields={(_, index) => (
        <div className={styles.link}>
          <TextInput
            name={`links.${index}.name`}
            label={translations.linkTitle}
            validate={FormikValidator({ mandatory: true })}
            withoutMargin
          />
          <TextInput
            name={`links.${index}.url`}
            label={translations.link}
            type="url"
            validate={FormikValidator({ validator: validateURL, mandatory: true })}
            withoutMargin
          />
        </div>
      )}
    />
  </Card>
);
