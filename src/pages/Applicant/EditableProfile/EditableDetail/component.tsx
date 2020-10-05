import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import isArray from "lodash/isArray";

import { SubmitButton } from "$components/SubmitButton";
import { PersonalInformationForm } from "../PersonalInformationForm";
import { SkillsAndLanguagesForm } from "../SkillsAndLanguagesForm";
import { LinksForm } from "../LinksForm";
import { CareersSelectorForm } from "../../SignUp/CareersSelectorForm";
import { WorkExperienceForm } from "../WorkExperienceForm";

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
          <div className={styles.body}>
            <Form className={styles.formContainer} id={formName}>
              <PersonalInformationForm className={styles.card} />
              <SkillsAndLanguagesForm className={styles.card}/>
              <LinksForm links={values.links} className={styles.card}/>
              <CareersSelectorForm
                className={styles.card}
                defaultValue={{ careerCode: "", isGraduate: true }}
                careers={values.careers}
              />
              <WorkExperienceForm sections={values.sections} className={styles.card}/>
            </Form>
            <div className={styles.footer}>
              <div className={styles.formErrorsContainer}>
                { isArray(errors?._form) && errors?._form?.map((error: string) =>
                  <span key={error} className={styles.formError}>{error}</span>
                )}
              </div>
              <div className={styles.submit}>
                <SubmitButton
                  form={formName}
                  kind="primary"
                  type="submit"
                  disabled={isSubmitting}
                  errors={errors}
                >
                  {translations.submit}
                </SubmitButton>
              </div>
            </div>
          </div>
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
