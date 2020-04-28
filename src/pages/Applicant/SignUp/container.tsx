import React, { Fragment, FunctionComponent } from "react";
import { FormikHelpers } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { useTranslations } from "$hooks/useTranslations";
import { SAVE_APPLICANT } from "$mutations";
import { Session } from "$models/Session";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect, useHistory } from "react-router-dom";
import { ISignUpTranslations, ISignUpValues } from "./interface";
import { SignUp } from "./component";
import { useLogin } from "$hooks/useLogin";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [saveApplicant] = useMutation(SAVE_APPLICANT);
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
    const { data: { saveApplicant: applicant } } = await saveApplicant({
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
    });
    try {
      const loginResult = await login({ variables: { email, password } });
      setSubmitting(false);
      Session.login(loginResult.data.login);
      history.push(RoutesBuilder.applicant.edit(applicant.uuid));
    } catch (error) {
      setErrors({
        email: JSON.stringify(error),
        password: JSON.stringify(error)
      });
      setSubmitting(false);
    }
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
