import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LoginForm } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { ITranslations, IContainerProps } from "./interface";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";

export const LoginFormContainer = <TVariables extends {}>({
  onSubmit,
  ...props
}: IContainerProps<TVariables>) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<ITranslations>("loginForm");
  if (!translations) return <Fragment />;

  const showBadCredentialsError = () =>
    enqueueSnackbar(translations.badCredentialsMessage, { variant: "error" });

  const onClick = async (values: TVariables, formikHelpers: FormikHelpers<TVariables>) => {
    return onSubmit(values, formikHelpers, {
      BadCredentialsError: () => showBadCredentialsError(),
      UserNotFoundError: () => showBadCredentialsError(),
      InvalidEmptyPasswordError: () => showBadCredentialsError(),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    });
  };

  return <LoginForm {...props} onSubmit={onClick} translations={translations} />;
};
