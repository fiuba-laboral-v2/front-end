import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";

import { PersonalInformationFormSection } from "../PersonalInformationFormSection";
import { SkillsAndLanguagesFormSection } from "../SkillsAndLanguagesFormSection";
import { LinksFormSection } from "../LinksFormSection";
import { CareersSelectorForm } from "../../SignUp/CareersSelectorForm";
import { WorkExperienceFormSection } from "../WorkExperienceFormSection";
import { FormFooter } from "$components/FormFooter";

import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interface";
import styles from "./styles.module.scss";

export const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    initialValues,
    onSubmit,
    translations,
    validateForm
  }) => {
  const formName = "editApplicantDetailForm";
  return (
    <>
      <h1 className={styles.title}>{translations.title}</h1>
      <Formik
        initialValues={initialValues}
        validateOnMount
        onSubmit={onSubmit}
        validate={validateForm}
      >
        {({ values, isSubmitting, errors }) => (
          <Form id={formName}>
            <PersonalInformationFormSection className={styles.card} />
            <SkillsAndLanguagesFormSection className={styles.card}/>
            <LinksFormSection links={values.links} className={styles.card}/>
            <CareersSelectorForm
              className={styles.card}
              defaultValue={{ careerCode: "", isGraduate: true }}
              careers={values.careers}
            />
            <WorkExperienceFormSection sections={values.sections} className={styles.card}/>
            <FormFooter
              className={styles.footer}
              isSubmitting={isSubmitting}
              submitButtonText={translations.submit}
              errors={errors}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

interface IApplicantDetailEditableProps {
  initialValues: IApplicantEditableFormValues;
  onSubmit: (applicant: IApplicantEditableFormValues) => void;
  translations: IApplicantDetailEditableTranslations;
  validateForm: (value: IApplicantEditableFormValues) => object;
}
