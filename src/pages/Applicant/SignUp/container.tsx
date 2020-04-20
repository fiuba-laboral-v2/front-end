import React, { FunctionComponent } from "react";
import { FormikHelpers } from "formik";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { SAVE_APPLICANT, LOGIN } from "$mutations";
import { Session } from "$models/Session";
import SignUpTranslations from "./translations";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ISignUpValues } from "./interface";
import { SignUp } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [saveApplicant] = useMutation(SAVE_APPLICANT);
  const [login] = useMutation(LOGIN);

  const {
    data: { getTranslations } = { getTranslations: [] },
    loading: loadingTranslations
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: SignUpTranslations } });

  const translations = translationsMapper(getTranslations);

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
      }
    });
    setSubmitting(false);
    const { data: loginData } = await login({ variables: { email, password } });
    Session.login(loginData.login);
    history.push(RoutesBuilder.applicant.detail(applicant.uuid));
  };

  if (loadingTranslations) return <LoadingSpinner/>;

  return (
    <SignUp
      translations={translations}
      validateForm={validateForm}
      onSubmit={onSubmit}
    />
  );
};

const translationsMapper = (translations: string[] = Array(10).fill("")) => {
  const [
    title,
    email,
    password,
    passwordConfirm,
    name,
    surname,
    padron,
    careersTitle,
    submit
  ] = translations;

  return {
    title,
    email,
    password,
    passwordConfirm,
    name,
    surname,
    padron,
    careersTitle,
    submit
  };
};

export { SignUpContainer };
