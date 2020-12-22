import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useTranslations, useUpdateCompanyUserPassword } from "$hooks";
import { useShowError } from "$hooks/snackbar/useShowError";

import { EditPassword } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { IFormValues, ITranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const EditPasswordContainer: FunctionComponent = () => {
  const history = useHistory();
  const showError = useShowError();
  const { updatePassword } = useUpdateCompanyUserPassword();
  const translations = useTranslations<ITranslations>("editCompanyUserPassword");

  const onSubmit = async (
    { oldPassword, newPassword }: IFormValues,
    { setSubmitting }: FormikHelpers<IFormValues>
  ) => {
    const result = await updatePassword({
      variables: { oldPassword, newPassword },
      errorHandlers: {
        BadCredentialsError: () => showError({ message: translations?.badCredentialsError })
      }
    });
    if (result.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.company.users());
  };

  return (
    <Window>
      {!translations && <LoadingSpinner />}
      <EditPassword
        hidden={!translations}
        translations={translations}
        onSubmit={onSubmit}
        initialValues={{
          oldPassword: "",
          newPassword: "",
          newPasswordConfirm: "",
          _form: ""
        }}
      />
    </Window>
  );
};
