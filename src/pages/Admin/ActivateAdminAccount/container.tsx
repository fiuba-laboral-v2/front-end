import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations, useActivateAdminAccount, useAdminByUuid } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations } from "./interfaces";

import { ActivateAdminAccount } from "./component";
import { Window } from "$components/Window";

export const ActivateAdminAccountContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("activateAdminAccount");
  const { activateAdminAccount } = useActivateAdminAccount();
  const admin = useAdminByUuid(uuid);

  const onSubmit = async () => {
    const result = await activateAdminAccount({ variables: { uuid } });
    if (result.error) return;
    history.push(RoutesBuilder.admin.admins());
  };

  return (
    <Window loading={!translations || !admin}>
      <ActivateAdminAccount admin={admin} translations={translations} onSubmit={onSubmit} />
    </Window>
  );
};
