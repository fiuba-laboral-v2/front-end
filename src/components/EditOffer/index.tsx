import React, { FunctionComponent, ReactNode } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { TextInput } from "$components/TextInput";
import { Window } from "$components/Window";
import { NumberInput } from "$components/NumberInput";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";
import { ICreateOrUpdateOffer } from "$interfaces/Offer";
import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange, validateSalaryRange } from "validations-fiuba-laboral-v2";
import styles from "./styles.module.scss";

export const EditOffer: FunctionComponent<ICreateOfferProps> = (
  {
    title,
    onSubmit,
    translations,
    initialValues,
    formFooter
  }
) => (
  <Window>
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{title}</h1>
      <Formik
        <ICreateOfferValues>
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
        {({ values, errors, isSubmitting, submitForm }) =>
          <>
            <Form className={styles.formContainer}>
              <TextInput
                name="title"
                label={translations.offerTitle}
                validate={FormikValidator({ mandatory: true })}
              />
              <TargetApplicantTypeSelector
                value={values.targetApplicantType}
                error={errors.targetApplicantType}
              />
              <TextInput
                name="description"
                label={translations.description}
                validate={FormikValidator({ mandatory: true })}
                multiline
              />
              <NumberInput
                name="hoursPerDay"
                label={translations.hoursPerDay}
                validate={FormikValidator({
                  validator: validateIntegerInRange({
                    min: { value: 0, include: false }
                  }),
                  mandatory: true
                })}
              />
              <NumberInput
                name="minimumSalary"
                label={translations.minimumSalary}
                validate={FormikValidator({
                  validator: validateIntegerInRange({
                    min: { value: 0, include: false }
                  }),
                  mandatory: true
                })}
              />
              <NumberInput
                name="maximumSalary"
                label={translations.maximumSalary}
                validate={FormikValidator({
                  validator: validateIntegerInRange({
                    min: { value: 0, include: false }
                  }),
                  mandatory: true
                })}
              />
            </Form>
            {formFooter({ isSubmitting, submitForm, errors })}
          </>
        }
      </Formik>
    </div>
  </Window>
);

export interface ICreateOfferValues extends ICreateOrUpdateOffer {
  _form: string;
}

export interface IEditOfferTranslations {
  create: string;
  edit: string;
  offerTitle: string;
  description: string;
  hoursPerDay: string;
  minimumSalary: string;
  maximumSalary: string;
  submit: string;
}

interface IFormFooterParams {
  isSubmitting: boolean;
  submitForm: () => void;
  errors: FormikErrors<ICreateOfferValues>;
}

interface ICreateOfferProps {
  title: string;
  initialValues: ICreateOfferValues;
  onSubmit: (values: ICreateOfferValues) => void;
  translations: IEditOfferTranslations;
  formFooter: (params: IFormFooterParams) => ReactNode;
}
