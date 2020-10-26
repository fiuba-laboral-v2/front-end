import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LogInForm } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ILoginVariables, useLogin, useTranslations } from "$hooks";
import { ITranslations, IContainerProps } from "./interface";
import { useSnackbar } from "notistack";

export const LogInFormContainer: FunctionComponent<IContainerProps> = props => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useLogin();
  const translations = useTranslations<ITranslations>("login");
  if (!translations) return <Fragment />;

  const setBadCredentialsError = () =>
    enqueueSnackbar(translations.badCredentialsMessage, { variant: "error" });

  const onSubmit = async (
    values: ILoginVariables,
    { setSubmitting }: FormikHelpers<ILoginVariables>
  ) => {
    const loginResult = await login({
      variables: values,
      errorHandlers: {
        BadCredentialsError: () => setBadCredentialsError(),
        UserNotFoundError: () => setBadCredentialsError(),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return (
    <LogInForm
      {...props}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      translations={translations}
    />
  );
};
