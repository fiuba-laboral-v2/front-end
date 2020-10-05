import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";

import { PersonalInformationForm } from "../PersonalInformationForm";
import { SkillsAndLanguagesForm } from "../SkillsAndLanguagesForm";
import { LinksForm } from "../LinksForm";
import { CareersSelectorForm } from "../../SignUp/CareersSelectorForm";
import { WorkExperienceForm } from "../WorkExperienceForm";
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
            <PersonalInformationForm className={styles.card} />
            <SkillsAndLanguagesForm className={styles.card}/>
            <LinksForm links={values.links} className={styles.card}/>
            <CareersSelectorForm
              className={styles.card}
              defaultValue={{ careerCode: "", isGraduate: true }}
              careers={values.careers}
            />
            <WorkExperienceForm sections={values.sections} className={styles.card}/>
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
