import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { useTranslations } from "$hooks/translations";
import { LOGIN } from "$mutations";
import { Session } from "$models/Session";

import { LogInForm } from "./component";

import { ILogInFormValues, ILogInFormTranslationsProps } from "./interface";
import { FormikHelpers } from "formik";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

const LogInFormContainer: FunctionComponent<ILogInFormContainerProps> = ({ className }) => {
  const history = useHistory();
  const [ login ] = useMutation(LOGIN);

  const { translations, loading } = useTranslations<ILogInFormTranslationsProps>("login");

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting }: FormikHelpers<ILogInFormValues>
  ) => {
    const { data } = await login({ variables: values });
    Session.login(data.login);
    setSubmitting(false);
    history.push(RoutesBuilder.applicant.home());
  };

  if (loading) return <div/>;

  return (
    <LogInForm
      className={className}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      translations={translations!}
    />
  );
};

interface ILogInFormContainerProps {
  className?: string;
}

export { LogInFormContainer };
