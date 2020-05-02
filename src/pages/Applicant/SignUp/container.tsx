import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";

import { SignUp } from "./component";

import { useLogin } from "$hooks/useLogin";
import { useSaveApplicant } from "$hooks/useSaveApplicant";
import { useTranslations } from "$hooks/useTranslations";
import { Session } from "$models/Session";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ISignUpTranslations, ISignUpValues } from "./interface";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const saveApplicant = useSaveApplicant();
  const login = useLogin();

  const translations = useTranslations<ISignUpTranslations>("applicantSignUp");

  const validateForm = (values: ISignUpValues) => {
    const selectedCodes = values.careers.map(career => career.code);
    if (new Set(selectedCodes).size !== selectedCodes.length) {
      return "No se pueden repetir carreras";
    }
    if (selectedCodes.length === 0) {
      return "Debes elegir como mínimo una carrera";
    }
  };

  const onSubmit = async (
    {
      email,
      password,
      name,
      surname,
      padron,
      careers
    }: ISignUpValues,
    {
      setSubmitting,
      setErrors
    }: FormikHelpers<ISignUpValues>
  ) => {
    const saveApplicantResult = await saveApplicant(
      {
        variables: {
          name,
          surname,
          padron,
          careers,
          user: {
            email,
            password
          }
        },
        handlers: {
          UserEmailAlreadyExistsError: () => setErrors({ email: `Este email ya existe` }),
          defaultHandler: () => history.push(RoutesBuilder.internalServerError)
        }
      }
    );
    if (saveApplicantResult.error) return;

    const loginResult = await login({
      variables: { email, password },
      handlers: { defaultHandler: () => history.push(RoutesBuilder.internalServerError) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.applicant.edit(saveApplicantResult.data.saveApplicant.uuid));
  };

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Fragment/>;

  return (
    <SignUp
      translations={translations.data}
      validateForm={validateForm}
      onSubmit={onSubmit}
    />
  );
};

export { SignUpContainer };
