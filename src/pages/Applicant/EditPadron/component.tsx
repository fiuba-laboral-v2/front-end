import React, { FunctionComponent } from "react";
import { FormikHelpers } from "formik/dist/types";
import { IFormValues, ITranslations } from "./interfaces";

import { FormFooter } from "$components/FormFooter";
import { FormSection } from "$components/FormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { PositiveIntegerField } from "$components/Fields";

import styles from "./styles.module.scss";

export const EditPadron: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit,
  translations,
  hidden
}) => (
  <Form title={translations?.title}>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, errors }) => (
        <FormikForm id="editPadron" hidden={hidden}>
          {translations && (
            <FormSection className={styles.formSection}>
              <PositiveIntegerField mandatory name="padron" label={translations.padron} />
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
