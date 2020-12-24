import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useTranslations, useUpdateMyForgottenPassword } from "$hooks";

import { EditMyForgottenPassword } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { IFormValues, ITranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const EditMyForgottenPasswordContainer: FunctionComponent = () => {
  const { token } = useParams<{ token: string }>();
  const history = useHistory();
  const { updateMyForgottenPassword } = useUpdateMyForgottenPassword();
  const translations = useTranslations<ITranslations>("editMyForgottenPassword");

  const onSubmit = async (
    { newPassword }: IFormValues,
    { setSubmitting }: FormikHelpers<IFormValues>
  ) => {
    const result = await updateMyForgottenPassword({
      variables: { token, newPassword },
      errorHandlers: {
        UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
        CompanyUserNotFoundError: () => history.push(RoutesBuilder.public.notFound())
      }
    });
    if (result.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.company.myOffers());
  };

  return (
    <Window>
      {!translations && <LoadingSpinner />}
      <EditMyForgottenPassword
        hidden={!translations}
        translations={translations}
        onSubmit={onSubmit}
        initialValues={{
          token,
          newPassword: "",
          newPasswordConfirm: "",
          _form: ""
        }}
      />
    </Window>
  );
};
