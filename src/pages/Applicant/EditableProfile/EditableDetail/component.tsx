import React, { FunctionComponent } from "react";
import { Form as FormikForm } from "formik";

import { PersonalInformationFormSection } from "../PersonalInformationFormSection";
import { SkillsAndLanguagesFormSection } from "../SkillsAndLanguagesFormSection";
import { LinksFormSection } from "../LinksFormSection";
import { CareersSelectorFormSection } from "$components/CareersSelectorFormSection";
import { WorkExperienceFormSection } from "../WorkExperienceFormSection";
import { AdditionalKnowledgeFormSection } from "../AdditionalKnowledgeFormSection";
import { FormFooter } from "$components/FormFooter";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";

import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interfaces";
import styles from "./styles.module.scss";

export const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = ({
  initialValues,
  onSubmit,
  translations,
  validateForm
}) => {
  const formName = "editApplicantDetailForm";
  return (
    <Form title={translations.title}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
        {({ values, isSubmitting, errors }) => (
          <FormikForm id={formName}>
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
              submitButtonText={translations.submit}
              errors={errors}
            />
          </FormikForm>
        )}
      </Formik>
    </Form>
  );
};

interface IApplicantDetailEditableProps {
  initialValues: IApplicantEditableFormValues;
  onSubmit: (applicant: IApplicantEditableFormValues) => void;
  translations: IApplicantDetailEditableTranslations;
  validateForm: (value: IApplicantEditableFormValues) => object;
}
