import React, { FunctionComponent } from "react";
import { FormikHelpers } from "formik";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { SAVE_APPLICANT, SIGN_UP, LOGIN } from "$mutations";
import { Session } from "$models/Session";
import SignUpTranslations from "./translations";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { pick } from "lodash";
import { ISignUpValues } from "./interface";
import { SignUp } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [signUp] = useMutation(SIGN_UP);
  const [saveApplicant] = useMutation(SAVE_APPLICANT);
  const [ login ] = useMutation(LOGIN);

  const {
    data: { getTranslations } = { getTranslations: [] },
    loading: loadingTranslations
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: SignUpTranslations } });

  const translations = translationsMapper(getTranslations);

  const validate = (values: ISignUpValues) => {
    const selectedCodes = values.careers.map(career => career.code);
    if (new Set(selectedCodes).size !== selectedCodes.length) {
      return "No se pueden repetir carreras";
    }
    if (selectedCodes.length === 0) {
      return "Debes elegir como mínimo una carrera";
    }
  };

  const onSubmit = async (
    values: ISignUpValues,
    { setSubmitting }: FormikHelpers<ISignUpValues>
  ) => {
    await signUp({ variables: pick(values, ["email", "password"]) });
    const { data: { saveApplicant: applicant } } = await saveApplicant({
      variables: pick(values, ["name", "surname", "padron", "careers"])
    });
    setSubmitting(false);
    const { data: loginData } = await login({ variables: values });
    Session.login(loginData.login);
    history.push(RoutesBuilder.applicant.detail(applicant.uuid));
  };

  if (loadingTranslations) return <LoadingSpinner/>;

  return (
    <SignUp
      translations={translations}
      validate={validate}
      onSubmit={onSubmit}
    />
  );
};

const translationsMapper = (translations: string[] = Array(10).fill("")) => {
  const [
    title,
    email,
    password,
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
    name,
    surname,
    padron,
    careersTitle,
    submit
  };
};

export { SignUpContainer };
