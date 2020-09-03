import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";

import { CareerSelector } from "$components/CareerSelector";
import { FormSet } from "$components/FormSet";
import { NumberInput } from "$components/NumberInput";
import { UserFields } from "$components/UserFields";
import { ApplicantCredentialsFields } from "./ApplicantCredentialsFields";

import styles from "./styles.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { FormikValidator } from "$models/FormikValidator";
import { IApplicantSignUpFormValues, IApplicantSignUpTranslations } from "./interface";
import { FormFooter } from "$components/FormFooter";

const SignUp: FunctionComponent<ISignUpProps> = (
  {
    translations,
    onSubmit,
    validateForm
  }
) => {
  const careerInitialValue = { careerCode: "", isGraduate: true };
  const initialValues: IApplicantSignUpFormValues = {
    user: {
      email: "",
      dni: "",
      password: "",
      name: "",
      surname: ""
    },
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
            const errors: FormikErrors<IApplicantSignUpFormValues> = {};
            const formErrorMessage = validateForm(values);
            if (formErrorMessage) errors._form = formErrorMessage;
            return errors;
          }}
          validateOnMount
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting, errors }) => (
            <div className={styles.body}>
              <Form className={styles.formContainer}>
                <div className={styles.textInputContainer}>
                  <UserFields email="user.email" name="user.name" surname="user.surname" />
                  <ApplicantCredentialsFields/>
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
                <FormFooter
                  className={styles.footer}
                  isSubmitting={isSubmitting}
                  submitButtonText={translations.submit}
                  errors={errors}
                />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

interface ISignUpProps {
  translations: IApplicantSignUpTranslations;
  validateForm: (values: IApplicantSignUpFormValues) => string | undefined;
  onSubmit: (
    values: IApplicantSignUpFormValues,
    formikHelpers: FormikHelpers<IApplicantSignUpFormValues>
  ) => void | Promise<any>;
}

export { SignUp };
