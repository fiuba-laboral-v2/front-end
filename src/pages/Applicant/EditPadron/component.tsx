import React, { FunctionComponent } from "react";
import { IFormValues, ITranslations } from "./interfaces";
import { IApplicant } from "$interfaces/Applicant";
import { FormikHelpers } from "formik";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { FormSection } from "$components/FormSection";
import { Form } from "$components/Form";
import { PositiveIntegerField } from "$components/Fields";

import styles from "./styles.module.scss";

export const EditPadron: FunctionComponent<IComponentProps> = ({
  modelToValues,
  onSubmit,
  initialValuesModel,
  translations,
  confirmDialogTranslations,
  setConfirmDialogIsOpen,
  confirmDialogIsOpen
}) => (
  <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
    {formikProps => (
      <Form title={translations?.title}>
        <FormikForm
          initialValuesModel={initialValuesModel}
          modelToValues={modelToValues}
          formikProps={formikProps}
        >
          {translations && (
            <FormSection className={styles.formSection}>
              <PositiveIntegerField mandatory name="padron" label={translations.padron} />
            </FormSection>
          )}
        </FormikForm>
        <FormFooter
          isSubmitting={formikProps.isSubmitting}
          submitButtonText={translations?.submit}
          errors={formikProps.errors}
          onSubmit={() => setConfirmDialogIsOpen(true)}
        />
        <FormConfirmDialog
          isOpen={confirmDialogIsOpen}
          onConfirm={formikProps.submitForm}
          onClose={() => setConfirmDialogIsOpen(false)}
          translations={confirmDialogTranslations}
        />
      </Form>
    )}
  </Formik>
);

interface IComponentProps {
  confirmDialogIsOpen: boolean;
  setConfirmDialogIsOpen: (confirmDialogIsOpen: boolean) => void;
  modelToValues: (applicant?: IApplicant) => IFormValues;
  initialValuesModel?: IApplicant;
  translations?: ITranslations;
  confirmDialogTranslations?: IConfirmDialogTranslations;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => Promise<any>;
}
