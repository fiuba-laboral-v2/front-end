import React, { FunctionComponent } from "react";

import { Form as FormikForm } from "formik";
import { FormikHelpers } from "formik/dist/types";

import { FormFooter } from "$components/FormFooter";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";

import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interfaces";
import styles from "./styles.module.scss";

export const EditableProfile: FunctionComponent<IEditableProfileProps> = ({
  initialValues,
  onUpdate,
  translations,
  acceptanceCriteria
}) => (
  <Form title={translations.title} acceptanceCriteria={acceptanceCriteria}>
    <Formik initialValues={initialValues} onSubmit={onUpdate}>
      {({ values, setFieldValue, isSubmitting, errors }) => (
        <FormikForm>
          <CompanyDataFormSection
            className={styles.formSection}
            setFieldValue={setFieldValue}
            initialLogo={values.logo}
          />
          <ContactInformationFormSection className={styles.formSection} />
          <FormFooter
            isSubmitting={isSubmitting}
            submitButtonText={translations.submit}
            errors={errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);

interface IEditableProfileProps {
  acceptanceCriteria: string;
  initialValues: IEditableProfileFormValues;
  translations: IEditableProfileTranslations;
  onUpdate: (
    values: IEditableProfileFormValues,
    formikHelpers: FormikHelpers<IEditableProfileFormValues>
  ) => void | Promise<any>;
}
