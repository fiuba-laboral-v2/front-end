import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";

import Button from "$components/Button";
import { Window } from "$components/Window";
import { CompanyLogoInput } from "$components/CompanyLogoInput";
import { CompanyFields } from "$components/CompanyFields";

import styles from "./styles.module.scss";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interface";

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
        {({ values, setFieldValue, isSubmitting }) => (
          <>
            <Form id={formName}>
              <CompanyLogoInput
                className={styles.logo}
                defaultLogo={values.logo}
                setLogo={(logo: string) => setFieldValue("logo", logo)}
              />
              <CompanyFields />
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
