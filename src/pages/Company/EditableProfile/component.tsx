import React, { FunctionComponent } from "react";

import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";

import { Window } from "$components/Window";
import { FormFooter } from "$components/FormFooter";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";

import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interface";
import styles from "./styles.module.scss";

export const EditableProfile: FunctionComponent<IEditableProfileProps> = ({
  initialValues,
  onUpdate,
  translations
}) => (
  <Window>
    <h1 className={styles.title}>{translations.title}</h1>
    <Formik initialValues={initialValues} validateOnMount onSubmit={onUpdate}>
      {({ values, setFieldValue, isSubmitting, errors }) => (
        <Form>
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
        </Form>
      )}
    </Formik>
  </Window>
);

interface IEditableProfileProps {
  initialValues: IEditableProfileFormValues;
  translations: IEditableProfileTranslations;
  onUpdate: (
    values: IEditableProfileFormValues,
    formikHelpers: FormikHelpers<IEditableProfileFormValues>
  ) => void | Promise<any>;
}
