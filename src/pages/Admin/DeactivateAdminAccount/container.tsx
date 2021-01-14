import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations, useDeactivateAdminAccount, useAdminByUuid } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations } from "./interfaces";

import { DeactivateAdminAccount } from "./component";
import { Window } from "$components/Window";

export const DeactivateAdminAccountContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("deactivateAdminAccount");
  const { deactivateAdminAccount } = useDeactivateAdminAccount();
  const admin = useAdminByUuid(uuid);

  const onSubmit = async () => {
    const result = await deactivateAdminAccount({ variables: { uuid } });
    if (result.error) return;
    history.push(RoutesBuilder.admin.admins());
  };

  return (
    <Window loading={!translations || !admin}>
      <DeactivateAdminAccount admin={admin} translations={translations} onSubmit={onSubmit} />
    </Window>
  );
};
