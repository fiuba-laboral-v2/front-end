import React, { FunctionComponent } from "react";

import { FormikValidator } from "$models/FormikValidator";
import { arrayMaxOrZero } from "$models/arrayMaxOrZero";

import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { TextInput } from "$components/TextInput";

import { ISection } from "$interfaces/Section";
import styles from "./styles.module.scss";

export const SectionsFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  sections,
  name
}) => (
  <Card largePadding className={className}>
    <FormSet
      title={translations.title}
      name={name}
      values={sections}
      defaultValue={{
        title: "",
        text: "",
        displayOrder: arrayMaxOrZero(sections.map(({ displayOrder }) => displayOrder)) + 1
      }}
      fields={(_, index) => (
        <div className={styles.section}>
          <TextInput
            mandatory
            name={`${name}.${index}.title`}
            label={translations.sectionTitle}
            validate={FormikValidator({ mandatory: true })}
          />
          <TextInput
            mandatory
            name={`${name}.${index}.text`}
            label={translations.sectionContent}
            validate={FormikValidator({ mandatory: true })}
            multiline
          />
        </div>
      )}
    />
  </Card>
);

export interface ITranslations {
  title: string;
  sectionTitle: string;
  sectionContent: string;
}

interface IComponentProps extends ISectionsFormSection {
  translations: ITranslations;
}

export interface ISectionsFormSection {
  className?: string;
  sections: ISection[];
  name: string;
}
