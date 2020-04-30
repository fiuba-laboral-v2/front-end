import React, { Fragment, FunctionComponent } from "react";
import { Redirect, useHistory } from "react-router-dom";
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
    const { data: { saveApplicant: applicant } } = await saveApplicant(
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
        fetchPolicy: "no-cache"
      },
      {
        UserEmailAlreadyExistsError: () => setErrors({ email: `Este email ya existe` }),
        DefaultError: () => history.push(RoutesBuilder.internalServerError)
      }
    );
    const loginResult = await login(
      { variables: { email, password } },
      { DefaultError: () => history.push(RoutesBuilder.internalServerError) }
    );
    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.applicant.edit(applicant.uuid));
  };

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <SignUp
      translations={translations.data}
      validateForm={validateForm}
      onSubmit={onSubmit}
    />
  );
};

export { SignUpContainer };
