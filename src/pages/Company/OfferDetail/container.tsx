import React, { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import { useCompanyOfferByUuid, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { OfferDetail } from "$components/OfferDetail";
import { Window } from "$components/Window";
import { Actions } from "./Actions";
import { ActionsConfirmDialog } from "./ActionsConfirmDialog";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, refetch } = useCompanyOfferByUuid(uuid);
  const translations = useTranslations<ITranslations>("offerDetail");
  const [confirmRepublishIsOpen, setConfirmRepublishIsOpen] = useState(false);
  const [confirmExpireIsOpen, setConfirmExpireIsOpen] = useState(false);
  const offer = data?.getOfferByUuid;

  const handleRepublishOffer = () => setConfirmRepublishIsOpen(true);
  const handleExpireOffer = () => setConfirmExpireIsOpen(true);
  const closeRepublishDialog = () => setConfirmRepublishIsOpen(false);
  const closeExpireOfferDialog = () => setConfirmExpireIsOpen(false);

  return (
    <Window loading={!translations || !offer}>
      <OfferDetail
        actions={offer && <Actions {...{ offer, handleExpireOffer, handleRepublishOffer }} />}
        goToCompany={RoutesBuilder.company.myProfile()}
        offer={offer}
        withStatusLabel
      />
      {offer && (
        <ActionsConfirmDialog
          {...{
            offer,
            closeExpireOfferDialog,
            closeRepublishDialog,
            confirmExpireIsOpen,
            confirmRepublishIsOpen,
            refetch
          }}
        />
      )}
    </Window>
  );
};

interface ITranslations {
  edit: string;
  expire: string;
  republish: string;
}
