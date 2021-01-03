import React, { FunctionComponent } from "react";
import { FormikHelpers } from "formik/dist/types";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { IFormValues, ITranslations } from "./interfaces";

import { FormikForm } from "$components/FormikForm";
import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "$components/UserDataFormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import styles from "./styles.module.scss";

const formName = "signUpForm";

export const EditCompanyUser: FunctionComponent<IComponentProps> = ({
  modelToValues,
  initialValuesModel,
  onSubmit,
  translations,
  hidden
}) => (
  <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
    {formikProps => (
      <Form title={translations?.title}>
        <FormikForm
          id={formName}
          hidden={hidden}
          initialValuesModel={initialValuesModel}
          modelToValues={modelToValues}
          formikProps={formikProps}
        >
          <UserDataFormSection className={styles.formSection} withoutPassword />
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={translations?.submit}
            errors={formikProps.errors}
          />
        </FormikForm>
      </Form>
    )}
  </Formik>
);

interface IComponentProps {
  hidden: boolean;
  modelToValues: (companyUser?: ICompanyUser) => IFormValues;
  initialValuesModel?: ICompanyUser;
  translations?: ITranslations;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => Promise<any>;
}
