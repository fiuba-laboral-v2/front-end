import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCompanyUsers, useTranslations } from "$hooks";

import { CompanyUsersTable } from "$components/CompanyUsersTable";
import { Button } from "$components/Button";

export const CompanyUsers: FunctionComponent = () => {
  const response = useCompanyUsers();
  const translations = useTranslations<ITranslation>("companyUsers");

  return (
    <CompanyUsersTable
      visibleActions={["deleteUser"]}
      companyUsers={response?.data?.getCompanyUsers.results}
      fetchMore={response.fetchMore}
      loading={response.loading}
      shouldFetchMore={response?.data?.getCompanyUsers.shouldFetchMore}
    >
      <Button link={RoutesBuilder.company.createUser()} kind="primary">
        {translations?.addAdminButtonLabel || ""}
      </Button>
    </CompanyUsersTable>
  );
};

interface ITranslation {
  addAdminButtonLabel: string;
}
