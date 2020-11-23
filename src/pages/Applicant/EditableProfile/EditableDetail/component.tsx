import React, { FunctionComponent } from "react";
import { FormikProps } from "formik";
import { PersonalInformationFormSection } from "../PersonalInformationFormSection";
import { SkillsAndLanguagesFormSection } from "../SkillsAndLanguagesFormSection";
import { LinksFormSection } from "../LinksFormSection";
import { CareersSelectorFormSection } from "$components/CareersSelectorFormSection";
import { WorkExperienceFormSection } from "../WorkExperienceFormSection";
import { AdditionalKnowledgeFormSection } from "../AdditionalKnowledgeFormSection";
import { FormFooter } from "$components/FormFooter";
import { Form } from "$components/Form";
import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interfaces";
import styles from "./styles.module.scss";

export const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = ({
  translations,
  formikProps: { values, isSubmitting, errors }
}) => (
  <Form title={translations?.title}>
    <PersonalInformationFormSection className={styles.formSection} />
    <SkillsAndLanguagesFormSection className={styles.formSection} />
    <LinksFormSection links={values.links} className={styles.formSection} />
    <CareersSelectorFormSection
      className={styles.formSection}
      defaultValue={{
        careerCode: "",
        isGraduate: true,
        approvedSubjectCount: NaN,
        currentCareerYear: NaN
      }}
      careers={values.careers}
    />
    <WorkExperienceFormSection
      className={styles.formSection}
      name="experienceSections"
      sections={values.experienceSections}
    />
    <AdditionalKnowledgeFormSection
      className={styles.formSection}
      name="knowledgeSections"
      sections={values.knowledgeSections}
    />
    <FormFooter
      className={styles.footer}
      isSubmitting={isSubmitting}
      submitButtonText={translations?.submit}
      errors={errors}
    />
  </Form>
);

interface IApplicantDetailEditableProps {
  translations?: IApplicantDetailEditableTranslations;
  formikProps: FormikProps<IApplicantEditableFormValues>;
}
