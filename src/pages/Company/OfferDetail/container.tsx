import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyOfferByUuid, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { OfferDetail } from "$components/OfferDetail";
import { Window } from "$components/Window";
import { Actions } from "./Actions";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, refetch } = useCompanyOfferByUuid(uuid);
  const translations = useTranslations<ITranslations>("offerDetail");
  const offer = data?.getOfferByUuid;

  return (
    <Window loading={!translations || !offer}>
      <OfferDetail
        actions={offer && <Actions {...{ offer, refetch }} />}
        goToCompany={RoutesBuilder.company.myProfile()}
        offer={offer}
        withStatusLabel
      />
    </Window>
  );
};

interface ITranslations {
  edit: string;
  expire: string;
  republish: string;
}
