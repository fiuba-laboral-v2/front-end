import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useSaveCompanyUser, useShowError, useTranslations } from "$hooks";

import { AddCompanyUser } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { ICompanyUserFormValues, ITranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$errorHandlers/createCompanyErrorHandlers";

export const AddCompanyUserContainer: FunctionComponent = () => {
  const history = useHistory();
  const showError = useShowError();
  const { saveCompanyUser } = useSaveCompanyUser();

  const translations = useTranslations<ITranslations>("addCompanyUser");

  const onSubmit = async (
    { user: { passwordConfirm, ...userAttributes } }: ICompanyUserFormValues,
    { setErrors }: FormikHelpers<ICompanyUserFormValues>
  ) => {
    const result = await saveCompanyUser({
      variables: { user: userAttributes },
      errorHandlers: createCompanyErrorHandlers({ setErrors, showError })
    });
    if (result.error) return;
    history.push(RoutesBuilder.company.users());
  };

  return (
    <Window>
      {!translations && <LoadingSpinner />}
      <AddCompanyUser
        hidden={!translations}
        translations={translations}
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
          _form: ""
        }}
      />
    </Window>
  );
};
