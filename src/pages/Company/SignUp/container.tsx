import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useCreateCompany, useTranslations } from "$hooks";
import { useLogin } from "$models/hooks";
import { SignUp } from "./component";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$errorHandlers/createCompanyErrorHandlers";
import { useSnackbar } from "notistack";
import { Window } from "$components/Window";
import { LoadingWindow } from "$components/LoadingWindow";

export const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { createCompany } = useCreateCompany();
  const { login } = useLogin();

  const translations = useTranslations<ISignUpTranslations>("companySignUp");
  const acceptanceCriteria = useTranslations<{ text: string }>("companySignUpAcceptanceCriteria");

  if (!translations || !acceptanceCriteria) return <LoadingWindow />;

  const onSubmit = async (
    { _form, user: { passwordConfirm, ...userAttributes }, ...companyValues }: ISignUpFormValues,
    { setErrors, setSubmitting }: FormikHelpers<ISignUpFormValues>
  ) => {
    const createCompanyResult = await createCompany({
      variables: { user: userAttributes, ...companyValues },
      errorHandlers: createCompanyErrorHandlers({ setErrors, enqueueSnackbar })
    });
    if (createCompanyResult.error) return;

    const loginResult = await login({
      variables: { email: userAttributes.email, password: userAttributes.password },
      errorHandlers: { defaultHandler: () => history.push(RoutesBuilder.public.login()) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.company.myProfile());
  };

  return (
    <Window>
      <SignUp
        translations={translations}
        acceptanceCriteria={acceptanceCriteria.text}
        onSubmit={onSubmit}
        initialValues={{
          user: {
            email: "",
            password: "",
            passwordConfirm: "",
            name: "",
            surname: ""
          },
          companyName: "",
          businessName: "",
          cuit: "",
          email: "",
          slogan: "",
          description: "",
          website: "",
          _form: ""
        }}
      />
    </Window>
  );
};
