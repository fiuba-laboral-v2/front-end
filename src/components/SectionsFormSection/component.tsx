import React, { FunctionComponent } from "react";
import { arrayMaxOrZero } from "$models/arrayMaxOrZero";
import { Card } from "$components/Card";
import { FormSet } from "$components/FormSet";
import { ISection } from "$interfaces/Section";
import { SectionFormSection } from "./SectionFormSection";

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
      getValueKey={section => section.uuid}
      defaultValue={{
        title: "",
        text: "",
        displayOrder: arrayMaxOrZero(sections.map(({ displayOrder }) => displayOrder)) + 1
      }}
      fields={(_, index, autofocusInputRef) => (
        <SectionFormSection
          name={name}
          index={index}
          translations={translations}
          autofocusInputRef={autofocusInputRef}
        />
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
