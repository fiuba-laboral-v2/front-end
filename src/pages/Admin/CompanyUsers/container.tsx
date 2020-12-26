import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyUsersByCompany } from "$hooks";

import { CompanyUsersTable } from "$components/CompanyUsersTable";

export const CompanyUsersContainer: FunctionComponent = () => {
  const { companyUuid } = useParams<{ companyUuid: string }>();
  const response = useCompanyUsersByCompany(companyUuid);

  return (
    <CompanyUsersTable
      withoutActions
      companyUsers={response?.data?.getCompanyUsersByCompany.results}
      fetchMore={response.fetchMore}
      loading={response.loading}
      shouldFetchMore={response?.data?.getCompanyUsersByCompany.shouldFetchMore}
    />
  );
};
