import React, { Fragment, FunctionComponent } from "react";
import { FormikHelpers } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { useTranslations } from "$hooks/translations";
import { LOGIN, SAVE_APPLICANT } from "$mutations";
import { Session } from "$models/Session";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect, useHistory } from "react-router-dom";
import { ISignUpTranslations, ISignUpValues } from "./interface";
import { SignUp } from "./component";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [saveApplicant] = useMutation(SAVE_APPLICANT);
  const [login] = useMutation(LOGIN);

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
      setSubmitting
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
    setSubmitting(false);
    const { data: loginData } = await login({
      variables: { email, password },
      fetchPolicy: "no-cache"
    });
    Session.login(loginData.login);
    history.push(RoutesBuilder.applicant.detail(applicant.uuid));
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
