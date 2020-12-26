import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyUsersByCompany, useTranslations, useCompanyByUuid } from "$hooks";

import { CompanyUsersTable } from "$components/CompanyUsersTable";

export const CompanyUsersContainer: FunctionComponent = () => {
  const { companyUuid } = useParams<{ companyUuid: string }>();
  const translations = useTranslations<{ title: string }>("adminCompanyUsersListMainTitle");
  const response = useCompanyUsersByCompany(companyUuid);
  const companyName = useCompanyByUuid({ uuid: companyUuid })?.companyName;

  return (
    <CompanyUsersTable
      title={`${translations?.title} ${companyName}`}
      withoutActions
      companyUsers={response?.data?.getCompanyUsersByCompany.results}
      fetchMore={response.fetchMore}
      loading={response.loading}
      shouldFetchMore={response?.data?.getCompanyUsersByCompany.shouldFetchMore}
    />
  );
};
