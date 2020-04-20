import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";

import TextInput from "$components/TextInput";
import { CareerSelector } from "$components/CareerSelector";
import Button from "$components/Button";

import styles from "./styles.module.scss";
import { FormikHelpers } from "formik/dist/types";
import {
  validateEmail,
  validateIntegerInRange,
  validateName,
  validatePassword
} from "validations-fiuba-laboral-v2";
import { FormikValidator } from "$models/FormikValidator";
import { ISignUpValues } from "./interface";
import { FormSet } from "$components/FormSet";

const SignUp: FunctionComponent<ISignUpProps> = (
  {
    translations,
    onSubmit,
    validateForm
  }
) => {
  const formName = "signUpForm";
  const careerInitialValue = { code: "", creditsCount: 0 };
  const initialValues: ISignUpValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    surname: "",
    padron: 0,
    careers: [ careerInitialValue ],
    _form: ""
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormikErrors<ISignUpValues> = {};

            const formErrorMessage = validateForm(values);
            if (formErrorMessage) {
              errors._form = formErrorMessage;
            }

            if (values.password !== values.passwordConfirm) {
              errors.passwordConfirm = "Las contraseñas no coinciden";
            }
            return errors;
          }}
          validateOnMount={true}
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
                    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
                  />
                  <TextInput
                    name="password"
                    label={translations.password}
                    type="password"
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validatePassword, mandatory: true })}
                  />
                  <TextInput
                    name="passwordConfirm"
                    label={translations.passwordConfirm}
                    type="password"
                    className={styles.textInput}
                  />
                  <TextInput
                    name="name"
                    label={translations.name}
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validateName, mandatory: true })}
                  />
                  <TextInput
                    name="surname"
                    label={translations.surname}
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validateName, mandatory: true })}
                  />
                  <TextInput
                    name="padron"
                    label={translations.padron}
                    type="number"
                    inputProps={{ min: 0, step: 1 }}
                    className={styles.textInput}
                    validate={FormikValidator({
                      validator: validateIntegerInRange({ min: { value: 0, include: false } }),
                      mandatory: true
                    })}
                  />
                </div>
                <FormSet
                  title={translations.careersTitle}
                  name={"careers"}
                  values={values.careers}
                  defaultValue={careerInitialValue}
                  fields={(value, index) => (
                    <CareerSelector key={index} index={index} value={value}/>
                  )}
                />
              </Form>
              <div className={styles.footer}>
                <span className={styles.formError}>{errors._form}</span>
                <Button
                  form={formName}
                  className="primary"
                  type="submit"
                  disabled={isSubmitting}
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

interface ISignUpProps {
  translations: {
    title: string;
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
    surname: string;
    padron: string;
    careersTitle: string;
    submit: string;
  };
  validateForm: (values: ISignUpValues) => string | undefined;
  onSubmit: (values: ISignUpValues, formikHelpers: FormikHelpers<ISignUpValues>) =>
    void | Promise<any>;
}

export { SignUp };
