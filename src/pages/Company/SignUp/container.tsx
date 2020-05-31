import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useCreateCompany, useTranslations } from "$hooks";
import { useLogin } from "$models/hooks";
import { Session } from "$models/Session";
import { Redirect } from "$components/Redirect";
import { SignUp } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$errorHandlers/createCompanyErrorHandlers";
import { useSnackbar } from "notistack";

export const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const createCompany = useCreateCompany();
  const login = useLogin();

  const translations = useTranslations<ISignUpTranslations>("companySignUp");
  if (translations.loading) return <LoadingSpinner/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const onSubmit = async (
    {
      _form,
      user: {
        passwordConfirm,
        ...userAttributes
      },
      ...companyValues
    }: ISignUpFormValues,
    { setErrors, setSubmitting }: FormikHelpers<ISignUpFormValues>
  ) => {
    const createCompanyResult = await createCompany({
      variables: { user: userAttributes, ...companyValues },
      errorHandlers: createCompanyErrorHandlers({ setErrors, enqueueSnackbar })
    });
    if (createCompanyResult.error) return;

    const loginResult = await login({
      variables: { email: userAttributes.email , password: userAttributes.password },
      errorHandlers: { defaultHandler: () => history.push(RoutesBuilder.public.login()) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.company.myProfile());
  };

  return (
    <SignUp
      translations={translations.data}
      onSubmit={onSubmit}
    />
  );
};
