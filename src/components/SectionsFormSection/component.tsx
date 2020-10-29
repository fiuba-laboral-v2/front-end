import React, { FunctionComponent } from "react";
import { arrayMaxOrZero } from "$models/arrayMaxOrZero";
import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { Field } from "$components/Fields";
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
          <Field mandatory name={`${name}.${index}.title`} label={translations.sectionTitle} />
          <Field
            mandatory
            name={`${name}.${index}.text`}
            label={translations.sectionContent}
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
