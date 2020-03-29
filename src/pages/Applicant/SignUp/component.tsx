import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { FieldArray, Form, Formik } from "formik";

import { SAVE_APPLICANT, SIGN_UP } from "$mutations";

import { saveApplicantParams, signUpParams, validations } from "./utils";
import { RoutesBuilder } from "$src/routesBuilder";

import TextInput from "$components/TextInput";
import { CareerSelector } from "$components/CareerSelector";
import Button from "$components/Button";

import { IInitialValues, ISignUpProps } from "./interfaces";

import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";


const SignUp: FunctionComponent<ISignUpProps> = ({ translations, careers }) => {
  const history = useHistory();

  const [signUp] = useMutation(SIGN_UP);
  const [saveApplicant] = useMutation(SAVE_APPLICANT);
  const formName = "signUpForm";
  const initialValues: IInitialValues = {
    email: "",
    password: "",
    name: "",
    surname: "",
    padron: 0,
    careers: []
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={validations}
          onSubmit={async (values, { setSubmitting }) => {
            await signUp({
              variables: signUpParams(values)
            });
            const { data: { saveApplicant: applicant } } = await saveApplicant({
              variables: saveApplicantParams(values)
            });
            setSubmitting(false);
            history.push(RoutesBuilder.applicant.detail(applicant.uuid));
          }}
        >
          {({ values, isValid, isSubmitting }) => (
            <div className={styles.body}>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <TextInput
                  name="email"
                  label={translations.email}
                  type="email"
                />
                <TextInput
                  name="password"
                  label={translations.password}
                  type="password"
                />
                <TextInput
                  name="name"
                  label={translations.name}
                  type="text"
                />
                <TextInput
                  name="surname"
                  label={translations.surname}
                  type="text"
                />
                <TextInput
                  name="padron"
                  label={translations.padron}
                  type="number"
                  min={0}
                  step={1}
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
                            key={index}
                            index={index}
                            careers={careers}
                            arrayHelpers={arrayHelpers}
                          />
                        ))
                      ) : (
                        <button
                          className={styles.addCareerBtn}
                          type="button"
                          onClick={() => arrayHelpers.push({ creditsCount: 0 })}>
                          {translations.addCareerBtn}
                        </button>
                      )}
                    </div>
                  )}
                />
              </Form>
              <div className={styles.footer}>
                <Button
                  form={formName}
                  className="primary"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  {translations.submit}
                </Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export { SignUp };
