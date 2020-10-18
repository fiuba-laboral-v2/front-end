import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Feed } from "$components/Feed";
import { Window } from "$components/Window";
import { EmptyList } from "$components/EmptyList";
import { useMyOffers } from "$hooks/queries/useMyOffers";

export const MyOffersContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useMyOffers();
  const translations = useTranslations<ITranslations>("MyOffers");

  if (response.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }
  if (!translations) return <LoadingSpinner />;

  return (
    <Window>
      <Feed
        loading={response.loading}
        title={translations.title}
        offers={response.data?.getMyOffers.results || []}
        onCardClick={(uuid: string) => history.push(RoutesBuilder.company.offer(uuid))}
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
