import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import { Window } from "$components/Window";
import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "./UserDataFormSection";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";
import { AcceptanceCriteria } from "$components/AcceptanceCriteria";

import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import styles from "./styles.module.scss";

const formName = "signUpForm";

export const SignUp: FunctionComponent<ISignUpProps> = ({
  initialValues,
  onSubmit,
  translations
}) => (
  <Window>
    <h1 className={styles.title}>{translations.title}</h1>
    <div className={styles.middleContainer}>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: FormikErrors<ISignUpFormValues> = {};
          if (values.user.password !== values.user.passwordConfirm) {
            errors.user = { passwordConfirm: "Las contraseñas no coinciden" };
          }
          return errors;
        }}
        validateOnMount
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <div className={styles.formContainer}>
            <Form id={formName}>
              <UserDataFormSection className={styles.formSection} />
              <CompanyDataFormSection className={styles.formSection} />
              <ContactInformationFormSection className={styles.formSection} />
              <FormFooter
                isSubmitting={isSubmitting}
                submitButtonText={translations.submit}
                errors={errors}
              />
            </Form>
          </div>
        )}
      </Formik>
      <AcceptanceCriteria
        className={styles.acceptanceCriteria}
        text={
          "Criterio de aprobación de perfiles de empresas: \n\n" +
          "* No hacer X cosa  \n" +
          "* No hacer Y otra cosa" +
          "* Si hacés Z, te rechazo de una \n" +
          "* Si te haces sponsor, te apruebo al toque \n\n" +
          "Ante consultas/reclamos comunicarse a: \n\n" +
          "queseyo@fi.uba.ar".repeat(100)
        }
      />
    </div>
  </Window>
);

interface ISignUpProps {
  initialValues: ISignUpFormValues;
  translations: ISignUpTranslations;
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}
