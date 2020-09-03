import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { Window } from "$components/Window";
import { CompanyLogoInput } from "$components/CompanyLogoInput";
import { CompanyFields } from "$components/CompanyFields";

import styles from "./styles.module.scss";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interface";
import { FormFooter } from "$components/FormFooter";

export const EditableProfile: FunctionComponent<IEditableProfileProps> = (
  {
    initialValues,
    onUpdate,
    translations
  }
) => (
  <Window>
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{translations.title}</h1>
      <Formik
        initialValues={initialValues}
        validateOnMount
        onSubmit={onUpdate}
      >
        {({ values, setFieldValue, isSubmitting, errors }) => (
          <>
            <Form>
              <CompanyLogoInput
                className={styles.logo}
                initialValue={values.logo}
                setLogo={(logo: string) => setFieldValue("logo", logo)}
              />
              <CompanyFields edit/>
              <FormFooter
                isSubmitting={isSubmitting}
                submitButtonText={translations.submit}
                errors={errors}
              />
            </Form>
          </>
        )}
      </Formik>
    </div>
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
