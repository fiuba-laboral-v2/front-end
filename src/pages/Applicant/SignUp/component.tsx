import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form, FieldArray } from "formik";

import { SIGN_UP, SAVE_APPLICANT } from "$mutations";

import { validations, signUpParams, saveApplicantParams } from "./utils";

import TextInput from "$components/TextInput";
import CareerSelector from "$components/CareerSelector";

import styles from "./styles.module.scss";

interface ICareers {
  value: string;
  label: string;
}

interface ISignUpProps {
  translations: {
    title: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    padron: string;
    careersTitle: string;
    credits: string;
    addCareerBtn: string;
    submit: string;
  };
  careers: ICareers[];
}

const SignUp: FunctionComponent<ISignUpProps> = ({ translations, careers }) => {
  const [ signUp ] = useMutation(SIGN_UP);
  const [ saveApplicant ] = useMutation(SAVE_APPLICANT);

  return (
    <>
      <h1 className={styles.title}>{translations.title}</h1>
      <hr/>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          surname: "",
          padron: 0,
          careers: []
        }}
        validate={validations}
        onSubmit={(values, { setSubmitting }) => {
          signUp({
            variables: signUpParams(values)
          });
          saveApplicant({
            variables: saveApplicantParams(values)
          });
          setSubmitting(false);
        }}
      >
        {({ values, isValid, isSubmitting }) => (
          <Form translate="yes" className={styles.formContainer}>
            <TextInput
              id="email"
              label={translations.email}
              name="email"
              type="email"
              placeholder={translations.email}
              large
            />
            <TextInput
              id="password"
              label={translations.password}
              name="password"
              type="password"
              placeholder={translations.password}
              large
            />
            <TextInput
              id="name"
              label={translations.name}
              name="name"
              type="text"
              placeholder={translations.name}
              large
            />
            <TextInput
              id="surname"
              label={translations.surname}
              name="surname"
              type="text"
              placeholder={translations.surname}
              large
            />
            <TextInput
              id="padron"
              label={translations.padron}
              name="padron"
              type="number"
              placeholder={translations.padron}
              otherProps={{min:"0", step:"1", oninput:"validity.valid||(value='');"}}
              large
            />
            <FieldArray
              name="careers"
              render={arrayHelpers => (
                <div>
                  <h3 className={styles.careersTitle}>
                    {translations.careersTitle}
                  </h3>
                  {values.careers && values.careers.length > 0 ? (
                    values.careers.map((career, index) => (
                      <CareerSelector
                        index={index}
                        career={career}
                        options={careers}
                        arrayHelpers={arrayHelpers}
                        creditsLabel={translations.credits}
                      />
                    ))
                  ) : (
                    <button
                      className={styles.addCareerBtn}
                      type="button"
                      onClick={() => arrayHelpers.push("")}>
                        {translations.addCareerBtn}
                    </button>
                  )}
                </div>
              )}
            />
            <button
              className={styles.submitButton}
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {translations.submit}</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
