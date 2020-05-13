import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import TextInput from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { Window } from "$components/Window";
import { ICreateOfferProps, ICreateOfferValues } from "./interface";
import styles from "../SignUp/styles.module.scss";
import Button from "$components/Button";
import { NumberInput } from "$components/NumberInput";

const formName = "createOfferForm";

export const CreateOffer: FunctionComponent<ICreateOfferProps> = ({ onSubmit, translations }) => {
  return (
    <Window>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.formTitle}</h1>
        <Formik
          <ICreateOfferValues>
          initialValues={{
            title: "",
            description: "",
            hoursPerDay: NaN,
            minimumSalary: NaN,
            maximumSalary: NaN
          }}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting }) =>
            <>
              <Form className={styles.formContainer} id={formName}>
                <TextInput
                  name="title"
                  label={translations.offerTitle}
                  validate={FormikValidator({ mandatory: true })}
                />
                <TextInput
                  name="description"
                  label={translations.description}
                  validate={FormikValidator({ mandatory: true })}
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
              <Button
                form={formName}
                className="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {translations.submit}
              </Button>
            </>
          }
        </Formik>
      </div>
    </Window>
  );
};
