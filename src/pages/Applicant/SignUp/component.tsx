import React, { FunctionComponent } from "react";
import { FieldArray, Form, Formik } from "formik";

import { validations } from "./utils";

import TextInput from "$components/TextInput";
import { CareerSelector } from "$components/CareerSelector";
import Button from "$components/Button";

import { ICareersSelector } from "./interfaces";

import styles from "./styles.module.scss";
import { AddButton } from "$components/AddButton";
import { Subtitle } from "../../../components/Subtitle";
import { ICareer } from "../../../interfaces/Applicant";
import { FormikHelpers } from "formik/dist/types";


const SignUp: FunctionComponent<ISignUpProps> = ({ translations, careers, onSubmit }) => {
  const formName = "signUpForm";
  const initialValues: IInitialValues = {
    email: "",
    password: "",
    name: "",
    surname: "",
    padron: 0,
    careers: [{ code: "", creditsCount: 0 }],
    _form: ""
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={validations}
          isInitialValid={false}
          onSubmit={onSubmit}
        >
          {({ values, isValid, isSubmitting, errors }) => (
            <div className={styles.body}>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <div className={styles.textInputContainer}>
                  <TextInput
                    name="email"
                    label={translations.email}
                    type="email"
                    className={styles.textInput}
                  />
                  <TextInput
                    name="password"
                    label={translations.password}
                    type="password"
                    className={styles.textInput}
                  />
                  <TextInput
                    name="name"
                    label={translations.name}
                    type="text"
                    className={styles.textInput}
                  />
                  <TextInput
                    name="surname"
                    label={translations.surname}
                    type="text"
                    className={styles.textInput}
                  />
                  <TextInput
                    name="padron"
                    label={translations.padron}
                    type="number"
                    inputProps={{ min: 0, step: 1 }}
                    className={styles.textInput}
                  />
                </div>
                <FieldArray
                  name="careers"
                  render={arrayHelpers => (
                    <div>
                      <div className={styles.careersTitleContainer}>
                        <Subtitle>
                          {translations.careersTitle}
                        </Subtitle>
                        <AddButton onClick={() =>
                          arrayHelpers.insert(values.careers.length + 1, "")
                        }/>
                      </div>
                      {values.careers.map((career, index) => (
                        <CareerSelector
                          key={index}
                          index={index}
                          careers={careers}
                          arrayHelpers={arrayHelpers}
                        />
                      ))}
                    </div>
                  )}
                />
              </Form>
              <div className={styles.footer}>
                <span className={styles.formError}>{errors._form}</span>
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

interface IInitialValues {
  email: string;
  password: string;
  name: string;
  surname: string;
  padron: number;
  careers: ICareersSelector[];
  _form: string;
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
    submit: string;
  };
  careers: ICareer[];
  onSubmit: (values: IInitialValues, formikHelpers: FormikHelpers<IInitialValues>) =>
    void | Promise<any>;
}

export { SignUp };
