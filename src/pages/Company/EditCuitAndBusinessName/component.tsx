import React, { FunctionComponent } from "react";
import { IFormValues, ITranslations } from "./interfaces";
import { ICompany } from "$interfaces/Company";
import { FormikHelpers } from "formik";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { FormSection } from "$components/FormSection";
import { Form } from "$components/Form";
import { CuitField, TextField } from "$components/Fields";

import styles from "./styles.module.scss";

export const EditCuitAndBusinessName: FunctionComponent<IComponentProps> = ({
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
              <TextField name="businessName" label={translations.businessName} mandatory />
              <CuitField mandatory name="cuit" label={translations.cuit} />
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
  modelToValues: (company?: ICompany) => IFormValues;
  initialValuesModel?: ICompany;
  translations?: ITranslations;
  confirmDialogTranslations?: IConfirmDialogTranslations;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => Promise<any>;
}
