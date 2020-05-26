import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange, validateSalaryRange } from "validations-fiuba-laboral-v2";
import { Window } from "$components/Window";
import { NumberInput } from "$components/NumberInput";
import styles from "./styles.module.scss";
import { FormFooter } from "$components/FormFooter";

export const EditOffer: FunctionComponent<ICreateOfferProps> = (
  {
    onSubmit,
    translations,
    initialValues
  }
) => {
  return (
    <Window>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.create}</h1>
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
          {({ errors, isSubmitting }) =>
            <>
              <Form className={styles.formContainer}>
                <TextInput
                  name="title"
                  label={translations.offerTitle}
                  validate={FormikValidator({ mandatory: true })}
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
                <FormFooter
                  isSubmitting={isSubmitting}
                  submitButtonText={translations.submit}
                  formError={errors._form}
                />
              </Form>
            </>
          }
        </Formik>
      </div>
    </Window>
  );
};

export interface ICreateOfferValues {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
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

interface ICreateOfferProps {
  initialValues: ICreateOfferValues;
  onSubmit: (values: ICreateOfferValues) => void;
  translations: IEditOfferTranslations;
}
