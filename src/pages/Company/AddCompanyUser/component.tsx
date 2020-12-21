import React, { FunctionComponent } from "react";
import { FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "../SignUp/UserDataFormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { ICompanyUserFormValues, ITranslations } from "./interfaces";
import styles from "./styles.module.scss";
import { FormikForm } from "$components/FormikForm";

const formName = "signUpForm";

export const AddCompanyUser: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit,
  translations,
  hidden
}) => (
  <Form title={translations?.title}>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: FormikErrors<ICompanyUserFormValues> = {};
        if (values.user.password !== values.user.passwordConfirm) {
          errors.user = { passwordConfirm: "Las contraseñas no coinciden" };
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <FormikForm id={formName} hidden={hidden}>
          <UserDataFormSection className={styles.formSection} />
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
  initialValues: ICompanyUserFormValues;
  translations?: ITranslations;
  onSubmit: (
    values: ICompanyUserFormValues,
    formikHelpers: FormikHelpers<ICompanyUserFormValues>
  ) => void | Promise<any>;
}
