import React, { FunctionComponent } from "react";
import { IFormValues, ITranslations } from "./interfaces";
import { IConfirmDialogTranslations } from "$components/Dialog/FormConfirmDialog";

import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { FormFooter } from "$components/FormFooter";
import { FormSection } from "$components/FormSection";
import { Form } from "$components/Form";
import { PositiveIntegerField } from "$components/Fields";

import styles from "./styles.module.scss";
import { FormikProps } from "formik";

export const EditPadron: FunctionComponent<IComponentProps> = ({
  formikProps,
  translations,
  confirmDialogTranslations,
  setConfirmDialogIsOpen,
  confirmDialogIsOpen
}) => (
  <Form title={translations?.title}>
    {translations && (
      <FormSection className={styles.formSection}>
        <PositiveIntegerField mandatory name="padron" label={translations.padron} />
      </FormSection>
    )}
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
);

interface IComponentProps {
  confirmDialogIsOpen: boolean;
  setConfirmDialogIsOpen: (confirmDialogIsOpen: boolean) => void;
  formikProps: FormikProps<IFormValues>;
  translations?: ITranslations;
  confirmDialogTranslations?: IConfirmDialogTranslations;
}
