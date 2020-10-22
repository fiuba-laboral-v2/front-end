import React, { FunctionComponent, ReactNode } from "react";

import { Form as FormikForm, Formik, FormikErrors } from "formik";
import { Form } from "$components/Form";
import { MainInformationFormSection } from "./MainInformationFormSection";
import { DescriptionFormSection } from "./DescriptionFormSection";
import { RecipientsFormSection } from "./RecipientsFormSection";

import { validateSalaryRange } from "validations-fiuba-laboral-v2";

import { ICreateOfferValues } from "$interfaces/Offer";
import styles from "./styles.module.scss";

export const EditOffer: FunctionComponent<ICreateOfferProps> = ({
  title,
  acceptanceCriteria,
  onSubmit,
  initialValues,
  formFooter
}) => (
  <Form title={title} acceptanceCriteria={acceptanceCriteria}>
    <Formik<ICreateOfferValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={values => {
        if (isNaN(values.minimumSalary) || isNaN(values.maximumSalary)) return;
        try {
          validateSalaryRange(values.minimumSalary, values.maximumSalary);
        } catch ({ message }) {
          return { _form: message };
        }
      }}
    >
      {({ values, errors, isSubmitting, submitForm }) => (
        <>
          <FormikForm className={styles.formContainer}>
            <MainInformationFormSection className={styles.formSection} />
            <DescriptionFormSection
              className={styles.formSection}
              sections={values.sections}
              name="sections"
            />
            <RecipientsFormSection
              className={styles.formSection}
              targetApplicantType={{
                value: values.targetApplicantType,
                error: errors.targetApplicantType
              }}
            />
          </FormikForm>
          {formFooter({ isSubmitting, submitForm, errors })}
        </>
      )}
    </Formik>
  </Form>
);

export interface IEditOfferFormProps extends ICreateOfferValues {
  _form: string;
}

export interface IEditOfferTranslations {
  create: string;
  edit: string;
  submit: string;
}

interface IFormFooterParams {
  isSubmitting: boolean;
  submitForm: () => void;
  errors: FormikErrors<IEditOfferFormProps>;
}

interface ICreateOfferProps {
  acceptanceCriteria: string;
  title: string;
  initialValues: IEditOfferFormProps;
  onSubmit: (values: ICreateOfferValues) => void;
  formFooter: (params: IFormFooterParams) => ReactNode;
}
