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
import { AddButton } from "$components/AddButton";
import { Subtitle } from "../../../components/Subtitle";


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
          validateOnChange
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
