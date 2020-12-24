import React, { FunctionComponent } from "react";
import { FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { IFormValues, ITranslations } from "./interfaces";

import { FormFooter } from "$components/FormFooter";
import { FormSection } from "$components/FormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { PasswordField } from "$components/Fields";

import styles from "./styles.module.scss";

export const EditMyForgottenPassword: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit,
  translations,
  hidden
}) => (
  <Form title={translations?.title}>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: FormikErrors<IFormValues> = {};
        if (values.newPasswordConfirm !== values.newPassword) {
          errors.newPasswordConfirm = "Las contraseñas no coinciden";
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <FormikForm id="editMyForgottenPassword" hidden={hidden}>
          {translations && (
            <FormSection className={styles.formSection}>
              <PasswordField
                className={styles.newPassword}
                mandatory
                name="newPassword"
                label={translations.newPassword}
                validate
                autoComplete="new-password"
                withoutMargin
              />
              <PasswordField
                mandatory
                name="newPasswordConfirm"
                label={translations.newPasswordConfirm}
                validate
                autoComplete="new-password"
                withoutMargin
              />
            </FormSection>
          )}
          <FormFooter
            isSubmitting={isSubmitting}
            submitButtonText={translations?.submit}
            errors={errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);

interface IComponentProps {
  hidden: boolean;
  initialValues: IFormValues;
  translations?: ITranslations;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => void | Promise<any>;
}
