import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations, useMyOffers } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { Window } from "$components/Window";
import { EmptyList } from "$components/EmptyList";

export const MyOffersContainer: FunctionComponent<IContainerProps> = ({ searchQuery }) => {
  const filter = new CompanyOffersFilter(searchQuery);
  const history = useHistory();
  const response = useMyOffers(filter);
  const translations = useTranslations<ITranslations>("MyOffers");

  if (response.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  return (
    <Window loading={!translations}>
      <Feed
        loading={response.loading}
        title={translations?.title}
        offers={response.data?.getMyOffers.results || []}
        createLink={(uuid: string) => RoutesBuilder.company.offer(uuid)}
        fetchMore={response.fetchMore}
        shouldFetchMore={response.data?.getMyOffers.shouldFetchMore}
        withStatusLabels
        emptyListComponent={
          <EmptyList
            emptyTranslationSource="companyEmptyOfferList"
            buttonKind="primary"
            onClick={() => history.push(RoutesBuilder.company.createOffer())}
          />
        }
      />
    </Window>
  );
};

interface ITranslations {
  title: string;
}

interface IContainerProps {
  searchQuery: string;
}
