import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations, useActivateAdminAccount, useDeletedAdminByUuid } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";

export const ActivateAdminAccountContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("activateAdminAccount");
  const { activateAdminAccount } = useActivateAdminAccount();
  const admin = useDeletedAdminByUuid(uuid);

  const onSubmit = async () => {
    const result = await activateAdminAccount({ variables: { uuid } });
    if (result.error) return;
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

export interface ITranslations {
  title: string;
  description: string;
  submit: string;
}
