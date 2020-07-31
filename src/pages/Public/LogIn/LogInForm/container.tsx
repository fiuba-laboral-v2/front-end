import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikErrors, FormikHelpers } from "formik";
import { LogInForm } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ILoginVariables, useLogin, useTranslations } from "$hooks";
import { ILogInFormTranslationsProps } from "./interface";
import { useSnackbar } from "notistack";

const LogInFormContainer: FunctionComponent<ILogInFormContainerProps> = ({ className }) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const login = useLogin();
  const translations = useTranslations<ILogInFormTranslationsProps>("login");
  if (!translations) return <Fragment/>;

  const setBadCredentialsError = (setErrors: (callback: FormikErrors<ILoginVariables>) => void) =>
    enqueueSnackbar(translations.badCredentialsMessage, { variant: "error" });

  const onSubmit = async (
    values: ILoginVariables,
    { setSubmitting, setErrors }: FormikHelpers<ILoginVariables>
  ) => {
    const loginResult = await login(
      {
        variables: values,
        errorHandlers: {
          BadCredentialsError: () => setBadCredentialsError(setErrors),
          UserNotFoundError: () => setBadCredentialsError(setErrors),
          defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
        }
      }
    );
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return (
    <LogInForm
      className={className}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      translations={translations}
    />
  );
};

interface ILogInFormContainerProps {
  className?: string;
}

export { LogInFormContainer };
