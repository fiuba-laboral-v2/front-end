import React, { FunctionComponent } from "react";

import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { UrlField, Field } from "$components/Fields";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const LinksFormSection: FunctionComponent<IComponent> = ({
  className,
  translations,
  links
}) => (
  <Card largePadding className={className}>
    <FormSet
      title={translations.links}
      name="links"
      values={links}
      defaultValue={{ url: "", name: "" }}
      fields={(_, index) => (
        <div className={styles.link}>
          <Field mandatory name={`links.${index}.name`} label={translations.linkTitle} />
          <UrlField
            mandatory
            name={`links.${index}.url`}
            label={translations.link}
            type="url"
            withoutMargin
          />
        </div>
      )}
    />
  </Card>
);
