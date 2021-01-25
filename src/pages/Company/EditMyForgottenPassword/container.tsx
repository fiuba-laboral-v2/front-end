import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { useTranslations, useUpdateMyForgottenPassword } from "$hooks";

import { EditMyForgottenPassword } from "./component";
import { Window } from "$components/Window";
import { LoadingSpinner } from "$components/LoadingSpinner";

import { IFormValues, ITranslations } from "./interfaces";

export const EditMyForgottenPasswordContainer: FunctionComponent<IContainerProps> = ({
  searchQuery
}) => {
  const token = new URLSearchParams(searchQuery).get("token") as string;
  const history = useHistory();
  const { updateMyForgottenPassword } = useUpdateMyForgottenPassword();
  const translations = useTranslations<ITranslations>("editMyForgottenPassword");

  const onSubmit = async ({ newPassword }: IFormValues) => {
    const result = await updateMyForgottenPassword({
      variables: { token, newPassword },
      errorHandlers: {
        UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
        CompanyUserNotFoundError: () => history.push(RoutesBuilder.public.notFound())
      }
    });
    if (result.error) return;
    history.push(RoutesBuilder.company.myOffers());
  };

  return (
    <Window alwaysHideNavbar>
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

interface IContainerProps {
  searchQuery: string;
}
