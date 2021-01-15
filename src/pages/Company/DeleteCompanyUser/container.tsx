import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  useTranslations,
  useDeleteCompanyUser,
  useCompanyUserByUuid,
  useShowError,
  useCurrentUser,
  useLogout
} from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";

export const DeleteCompanyUserContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const showError = useShowError();
  const translations = useTranslations<ITranslations>("deleteCompanyUser");
  const { deleteCompanyUser } = useDeleteCompanyUser();
  const { logout } = useLogout();
  const currentUser = useCurrentUser().data?.getCurrentUser;
  const companyUser = useCompanyUserByUuid(uuid);

  const onSubmit = async () => {
    const result = await deleteCompanyUser({
      variables: { uuid },
      errorHandlers: {
        DeleteLastCompanyUserError: () =>
          showError({ message: translations?.deleteOnlyCompanyUserError })
      }
    });
    if (result.error) return;
    if (currentUser?.uuid === companyUser?.user.uuid) {
      await logout();
      history.push(RoutesBuilder.public.login());
      return;
    }
    history.push(RoutesBuilder.company.users());
  };

  return (
    <Window loading={!translations || !companyUser}>
      <AccountActivationForm
        title={`${translations?.title}\n${companyUser?.user.name} ${companyUser?.user.surname}`}
        description={translations?.description}
        submit={translations?.submit}
        onSubmit={onSubmit}
      />
    </Window>
  );
};

interface ITranslations {
  title: string;
  description: string;
  submit: string;
  deleteOnlyCompanyUserError: string;
}
