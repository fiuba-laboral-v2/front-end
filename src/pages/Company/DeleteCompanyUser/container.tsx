import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useTranslations, useDeleteCompanyUser } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { AccountActivationForm } from "$components/AccountActivationForm";
import { Window } from "$components/Window";

export const DeleteCompanyUserContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("deleteCompanyUser");
  const { deleteCompanyUser } = useDeleteCompanyUser();

  const onSubmit = async () => {
    const result = await deleteCompanyUser({ variables: { uuid } });
    if (result.error) return;
    history.push(RoutesBuilder.company.users());
  };

  return (
    <Window loading={!translations}>
      <AccountActivationForm
        title={`${translations?.title}\n${"name"} ${"surname"}`}
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
