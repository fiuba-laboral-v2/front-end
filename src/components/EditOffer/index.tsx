import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { TextInput } from "$components/TextInput";
import { Window } from "$components/Window";
import { NumberInput } from "$components/NumberInput";
import { FormFooter } from "$components/FormFooter";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";
import { ICreateOffer } from "$hooks";
import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange, validateSalaryRange } from "validations-fiuba-laboral-v2";
import styles from "./styles.module.scss";
import { ConfirmDialog } from "../ConfirmDialog";

export const EditOffer: FunctionComponent<ICreateOfferProps> = (
  {
    title,
    onSubmit,
    translations,
    initialValues
  }
) => {
  const [open, setOpen] = React.useState(false);

  return (
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
          {({ values, errors, isSubmitting }) =>
            <>
              <Form className={styles.formContainer}>
                <TextInput
                  name="title"
                  label={translations.offerTitle}
                  validate={FormikValidator({ mandatory: true })}
                />
                <TargetApplicantTypeSelector initialValue={values.targetApplicantType}/>
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
                  errors={errors}
                  onSubmit={() => setOpen(true)}
                />
                <ConfirmDialog
                  open={open}
                  onClose={() => setOpen(false)}
                />
              </Form>
            </>
          }
        </Formik>
      </div>
    </Window>
  );
};

export interface ICreateOfferValues extends ICreateOffer {
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
  title: string;
  initialValues: ICreateOfferValues;
  onSubmit: (values: ICreateOfferValues) => void;
  translations: IEditOfferTranslations;
}
