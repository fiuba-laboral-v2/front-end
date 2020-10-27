import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LogInForm } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ILoginVariables, useTranslations } from "$hooks";
import { ITranslations, IContainerProps } from "./interface";
import { useSnackbar } from "notistack";

export const LogInFormContainer: FunctionComponent<IContainerProps> = ({ onSubmit, ...props }) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<ITranslations>("login");
  if (!translations) return <Fragment />;

  const setBadCredentialsError = () =>
    enqueueSnackbar(translations.badCredentialsMessage, { variant: "error" });

  const onClick = async (
    values: ILoginVariables,
    formikHelpers: FormikHelpers<ILoginVariables>
  ) => {
    return onSubmit(values, formikHelpers, {
      BadCredentialsError: () => setBadCredentialsError(),
      UserNotFoundError: () => setBadCredentialsError(),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    });
  };

  return (
    <LogInForm
      {...props}
      initialValues={{ email: "", password: "" }}
      onSubmit={onClick}
      translations={translations}
    />
  );
};
