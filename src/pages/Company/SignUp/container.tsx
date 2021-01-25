import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useCreateCompany, useTranslations, useSharedSettings, useShowError } from "$hooks";
import { useCompanyLogin } from "$models/hooks";
import { SignUp } from "./component";
import { ISignUpFormValues, ISignUpTranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$errorHandlers/createCompanyErrorHandlers";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const showError = useShowError();
  const { createCompany } = useCreateCompany();
  const { login } = useCompanyLogin();

  const translations = useTranslations<ISignUpTranslations>("companySignUp");
  const acceptanceCriteria = useSharedSettings()?.companySignUpAcceptanceCriteria;

  const onSubmit = async (
    { _form, user: { passwordConfirm, ...userAttributes }, ...companyValues }: ISignUpFormValues,
    { setErrors }: FormikHelpers<ISignUpFormValues>
  ) => {
    const createCompanyResult = await createCompany({
      variables: { user: userAttributes, ...companyValues },
      errorHandlers: createCompanyErrorHandlers({ setErrors, showError })
    });
    if (createCompanyResult.error) return;

    const loginResult = await login({
      variables: { email: userAttributes.email, password: userAttributes.password },
      errorHandlers: { defaultHandler: () => history.push(RoutesBuilder.public.login()) }
    });
    if (loginResult.error) return;
    history.push(RoutesBuilder.company.editMyProfile());
  };

  const loading = !translations || !acceptanceCriteria;

  return (
    <Window withoutNavBar>
      {loading && <LoadingSpinner />}
      <SignUp
        hidden={loading}
        translations={translations}
        acceptanceCriteria={acceptanceCriteria}
        onSubmit={onSubmit}
        initialValues={{
          user: {
            email: "",
            password: "",
            passwordConfirm: "",
            name: "",
            surname: "",
            position: ""
          },
          companyName: "",
          businessName: "",
          businessSector: "",
          hasAnInternshipAgreement: false,
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
