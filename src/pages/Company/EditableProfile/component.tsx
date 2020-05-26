import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";

import Button from "$components/Button";
import { Window } from "$components/Window";
import TextInput from "$components/TextInput";
import { CompanyLogoInput } from "$components/CompanyLogoInput";

import styles from "./styles.module.scss";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interface";
import { FormikValidator } from "$models/FormikValidator";

import {
  validateCuit,
  validateEmail,
  validateName,
  validateURL
} from "validations-fiuba-laboral-v2";

const formName = "EditableProfileForm";

export const EditableProfile: FunctionComponent<IEditableProfileProps> = (
  {
    initialValues,
    onUpdate,
    translations
  }
) => (
  <Window>
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>{translations.title}</h1>
      <Formik
        initialValues={initialValues}
        validateOnMount={true}
        onSubmit={onUpdate}
      >
        {({ setFieldValue, isSubmitting }) => (
          <>
            <Form id={formName}>
              <CompanyLogoInput
                setLogo={(logo: string) => setFieldValue("logo", logo)}
              />
              <TextInput
                name="companyName"
                label={translations.companyName}
                validate={FormikValidator({ validator: validateName, mandatory: true })}
              />
              <TextInput
                name="cuit"
                label={translations.cuit}
                validate={FormikValidator({ validator: validateCuit, mandatory: true })}
              />
              <TextInput
                name="email"
                label={translations.companyEmail}
                validate={FormikValidator({ validator: validateEmail, mandatory: true })}
              />
              <TextInput
                name="slogan"
                label={translations.slogan}
              />
              <TextInput
                name="description"
                label={translations.description}
              />
              <TextInput
                name="website"
                label={translations.website}
                validate={FormikValidator({ validator: validateURL, mandatory: true })}
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
        )}
      </Formik>
    </div>
  </Window>
);

interface IEditableProfileProps {
  initialValues: IEditableProfileFormValues;
  translations: IEditableProfileTranslations;
  onUpdate: (
    values: IEditableProfileFormValues,
    formikHelpers: FormikHelpers<IEditableProfileFormValues>
  ) => void | Promise<any>;
}
