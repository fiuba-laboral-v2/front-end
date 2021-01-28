import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interfaces";
import { FormikHelpers } from "formik";
import { ICompany } from "$interfaces/Company";

import { FormFooter } from "$components/FormFooter";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";
import { Form } from "$components/Form";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { PhotosFormSection } from "./PhotosFormSection";

import styles from "./styles.module.scss";

export const EditableProfile: FunctionComponent<IEditableProfileProps> = ({
  translations,
  acceptanceCriteria,
  setConfirmDialogIsOpen,
  confirmDialogIsOpen,
  modelToValues,
  onSubmit,
  company
}) => (
  <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
    {formikProps => (
      <Form title={translations?.title} acceptanceCriteria={acceptanceCriteria}>
        <FormikForm
          initialValuesModel={company}
          modelToValues={modelToValues}
          formikProps={formikProps}
        >
          <CompanyDataFormSection
            className={styles.formSection}
            setFieldValue={formikProps.setFieldValue}
            initialLogo={formikProps.values.logo}
          />
          <ContactInformationFormSection className={styles.formSection} />
          <PhotosFormSection
            photos={formikProps.values.photos}
            className={classNames(styles.formSection, styles.photosFormSection)}
          />
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
          translations={translations}
        />
      </Form>
    )}
  </Formik>
);

interface IEditableProfileProps {
  confirmDialogIsOpen: boolean;
  setConfirmDialogIsOpen: (confirmDialogIsOpen: boolean) => void;
  acceptanceCriteria?: string;
  translations?: IEditableProfileTranslations;
  onSubmit: (
    values: IEditableProfileFormValues,
    formikErrors: FormikHelpers<IEditableProfileFormValues>
  ) => Promise<void>;
  modelToValues: (company?: ICompany) => IEditableProfileFormValues;
  company?: ICompany;
}
