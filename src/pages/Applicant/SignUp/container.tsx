import React, { FunctionComponent } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { SignUp } from "./component";
import SignUpTranslations from "./translations";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { SAVE_APPLICANT } from "$mutations";
import { useHistory } from "react-router-dom";
import { ISignUpValues } from "./interface";
import { FormikHelpers } from "formik";
import { LoadingSpinner } from "$components/LoadingSpinner";

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [saveApplicant] = useMutation(SAVE_APPLICANT);

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
