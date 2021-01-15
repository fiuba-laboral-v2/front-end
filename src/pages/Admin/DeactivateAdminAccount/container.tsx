import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  useTranslations,
  useDeactivateAdminAccount,
  useAdminByUuid,
  useCurrentUser,
  useLogout
} from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";

export const DeactivateAdminAccountContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("deactivateAdminAccount");
  const { deactivateAdminAccount } = useDeactivateAdminAccount();
  const admin = useAdminByUuid(uuid);
  const currentUser = useCurrentUser().data?.getCurrentUser;
  const { logout } = useLogout();

  const onSubmit = async () => {
    const result = await deactivateAdminAccount({ variables: { uuid } });
    if (result.error) return;
    if (currentUser?.uuid === admin?.user.uuid) {
      await logout();
      history.push(RoutesBuilder.public.login());
      return;
    }
    history.push(RoutesBuilder.admin.admins());
  };

  return (
    <Window loading={!translations || !admin}>
      <AccountActivationForm
        title={`${translations?.title}\n${admin?.user.name} ${admin?.user.surname}`}
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
}
