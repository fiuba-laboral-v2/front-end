import React, { FunctionComponent } from "react";
import { MyJobApplications } from "./component";
import { Redirect } from "$components/Redirect";
import { EmptyList } from "$components/EmptyList";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useMyJobApplications } from "$hooks/queries/useMyJobApplications";
import { useTranslations } from "$hooks";

export const MyJobApplicationsContainer: FunctionComponent = () => {
  const response = useMyJobApplications();
  const translations = useTranslations<ITranslation>("companyJobApplicationsListTitle");
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return (
    <MyJobApplications
      jobApplications={response.data?.getMyLatestJobApplications.results || []}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getMyLatestJobApplications.shouldFetchMore}
      loading={response.loading}
      {...(translations?.title && { title: translations.title })}
      emptyListComponent={
        <EmptyList
          emptyTranslationSource="jobApplicationEmptyOfferList"
          buttonKind="primary"
          link={RoutesBuilder.company.createOffer()}
        />
      }
    />
  );
};

interface ITranslation {
  title: string;
}
