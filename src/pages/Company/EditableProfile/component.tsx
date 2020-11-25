import React, { FunctionComponent } from "react";
import { FormFooter } from "$components/FormFooter";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";
import { Form } from "$components/Form";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interfaces";
import { FormikProps } from "formik";
import styles from "./styles.module.scss";

export const EditableProfile: FunctionComponent<IEditableProfileProps> = ({
  translations,
  acceptanceCriteria,
  formikProps: { setFieldValue, values, isSubmitting, errors }
}) => (
  <Form title={translations?.title} acceptanceCriteria={acceptanceCriteria}>
    <CompanyDataFormSection
      className={styles.formSection}
      setFieldValue={setFieldValue}
      initialLogo={values.logo}
    />
    <ContactInformationFormSection className={styles.formSection} />
    <FormFooter
      isSubmitting={isSubmitting}
      submitButtonText={translations?.submit}
      errors={errors}
    />
  </Form>
);

interface IEditableProfileProps {
  acceptanceCriteria?: string;
  translations?: IEditableProfileTranslations;
  formikProps: FormikProps<IEditableProfileFormValues>;
}
