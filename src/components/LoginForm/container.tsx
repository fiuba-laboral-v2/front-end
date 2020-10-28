import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LoginForm } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { ITranslations, IContainerProps } from "./interface";
import { useSnackbar } from "notistack";

export const LoginFormContainer = <TVariables extends {}>({
  onSubmit,
  ...props
}: IContainerProps<TVariables>) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<ITranslations>("login");
  if (!translations) return <Fragment />;

  const setBadCredentialsError = () =>
    enqueueSnackbar(translations.badCredentialsMessage, { variant: "error" });

  const onClick = async (values: TVariables, formikHelpers: FormikHelpers<TVariables>) => {
    return onSubmit(values, formikHelpers, {
      BadCredentialsError: () => setBadCredentialsError(),
      UserNotFoundError: () => setBadCredentialsError(),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    });
  };

  return <LoginForm {...props} onSubmit={onClick} translations={translations} />;
};
