import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useSaveCompanyUser, useTranslations } from "$hooks";

import { AddCompanyUser } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { ICompanyUserFormValues, ITranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { createCompanyErrorHandlers } from "$errorHandlers/createCompanyErrorHandlers";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";

export const AddCompanyUserContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { saveCompanyUser } = useSaveCompanyUser();

  const translations = useTranslations<ITranslations>("addCompanyUser");

  const onSubmit = async (
    { user: { passwordConfirm, ...userAttributes } }: ICompanyUserFormValues,
    { setErrors, setSubmitting }: FormikHelpers<ICompanyUserFormValues>
  ) => {
    const result = await saveCompanyUser({
      variables: { user: userAttributes },
      errorHandlers: createCompanyErrorHandlers({ setErrors, enqueueSnackbar })
    });
    if (result.error) return;
    setSubmitting(false);
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
            surname: ""
          },
          _form: ""
        }}
      />
    </Window>
  );
};
