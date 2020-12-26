import React, { FunctionComponent } from "react";
import { useCompanyUsersByCompany } from "$hooks";

import { CompanyUsersTable } from "$components/CompanyUsersTable";

export const CompanyUsersContainer: FunctionComponent = () => {
  const response = useCompanyUsersByCompany();

  return (
    <CompanyUsersTable
      companyUsers={response?.data?.getCompanyUsers.results}
      fetchMore={response.fetchMore}
      loading={response.loading}
      shouldFetchMore={response?.data?.getCompanyUsers.shouldFetchMore}
    />
  );
};
