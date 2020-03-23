import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form, FieldArray } from "formik";

import { SIGN_UP, SAVE_APPLICANT } from "$mutations";

import { validations, signUpParams, saveApplicantParams } from "./utils";

import TextInput from "$components/TextInput";
import CareerSelector from "$components/CareerSelector";
import Button from "$components/Button";

import { IInitialValues } from "./interfaces";

import styles from "./styles.module.scss";

interface ICareersMapper {
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
  careers: ICareersMapper[];
  setRedirectUrl: any;
}

const SignUp: FunctionComponent<ISignUpProps> = ({ translations, careers, setRedirectUrl }) => {
  const [signUp] = useMutation(SIGN_UP);
  const [saveApplicant] = useMutation(SAVE_APPLICANT);
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
      <h1 className={styles.title}>{translations.title}</h1>
      <hr />
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
          setRedirectUrl(`/applicants/${applicant.padron}/`);
        }}
      >
        {({ values, isValid, isSubmitting }) => (
          <Form translate="yes" className={styles.formContainer}>
            <TextInput
              id="email"
              label={translations.email}
              type="email"
            />
            <TextInput
              id="password"
              label={translations.password}
              type="password"
            />
            <TextInput
              id="name"
              label={translations.name}
              type="text"
            />
            <TextInput
              id="surname"
              label={translations.surname}
              type="text"
            />
            <TextInput
              id="padron"
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
                        creditsCount={career.creditsCount}
                        options={careers}
                        arrayHelpers={arrayHelpers}
                        creditsLabel={translations.credits}
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
            <Button
              className="primary"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {translations.submit}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
