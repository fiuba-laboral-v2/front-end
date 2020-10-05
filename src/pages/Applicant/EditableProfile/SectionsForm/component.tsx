import React, { FunctionComponent } from "react";

import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { TextInput } from "$components/TextInput";

import { FormikValidator } from "$models/FormikValidator";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const SectionsForm: FunctionComponent<IComponent> = (
  {
    translations,
    sections
  }
) => (
  <Card largePadding>
    <FormSet
      title={translations.sections}
      name="sections"
      values={sections}
      defaultValue={{
        title: "",
        text: "",
        displayOrder: Math.max(...sections.map(({ displayOrder }) => displayOrder)) + 1
      }}
      fields={(_, index) => (
        <div className={styles.section}>
          <TextInput
            name={`sections.${index}.title`}
            label={translations.sectionTitle}
            validate={FormikValidator({ mandatory: true })}
          />
          <TextInput
            name={`sections.${index}.text`}
            label={translations.sectionContent}
            validate={FormikValidator({ mandatory: true })}
            multiline
          />
        </div>
      )}
    />
  </Card>
);
