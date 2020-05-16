import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";

import { CareerSelector } from "$components/CareerSelector";
import Button from "$components/Button";
import { FormSet } from "$components/FormSet";
import { NumberInput } from "$components/NumberInput";
import { UserInput } from "../../../components/UserInput";

import styles from "./styles.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { FormikValidator } from "$models/FormikValidator";
import { ISignUpTranslations, ISignUpFormValues } from "./interface";

const SignUp: FunctionComponent<ISignUpProps> = (
  {
    translations,
    onSubmit,
    validateForm
  }
) => {
  const formName = "signUpForm";
  const careerInitialValue = { code: "", creditsCount: NaN };
  const initialValues: ISignUpFormValues = {
    user: {
      email: "",
      password: "",
      name: "",
      surname: ""
    },
    passwordConfirm: "",
    padron: NaN,
    careers: [careerInitialValue],
    _form: ""
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormikErrors<ISignUpFormValues> = {};

            const formErrorMessage = validateForm(values);
            if (formErrorMessage) {
              errors._form = formErrorMessage;
            }

            if (values.user.password !== values.passwordConfirm) {
              errors.passwordConfirm = "Las contraseñas no coinciden";
            }
            return errors;
          }}
          validateOnMount={true}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting, errors }) => (
            <div className={styles.body}>
              <Form className={styles.formContainer} id={formName}>
                <div className={styles.textInputContainer}>
                  <UserInput
                    email={{ name: "user.email", label: translations.email }}
                    password={{ name: "user.password", label: translations.password }}
                    passwordConfirm={
                      { name: "passwordConfirm", label: translations.passwordConfirm }
                    }
                    name={{ name: "user.name", label: translations.name }}
                    surname={{ name: "user.surname", label: translations.surname }}
                  />
                  <NumberInput
                    name="padron"
                    label={translations.padron}
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
  translations: ISignUpTranslations;
  validateForm: (values: ISignUpFormValues) => string | undefined;
  onSubmit: (values: ISignUpFormValues, formikHelpers: FormikHelpers<ISignUpFormValues>) =>
    void | Promise<any>;
}

export { SignUp };
