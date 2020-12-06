import React, { FunctionComponent, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCompanyOfferByUuid, useExpireOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { OfferDetail } from "$components/OfferDetail";
import { Window } from "$components/Window";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";

export const OfferDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { uuid } = useParams<{ uuid: string }>();
  const { data, refetch } = useCompanyOfferByUuid(uuid);
  const translations = useTranslations<ITranslations>("offerDetail");
  const { expireOffer, loading } = useExpireOffer();
  const { enqueueSnackbar } = useSnackbar();
  const offer = data?.getOfferByUuid;

  const handleExpireOffer = useCallback(async () => {
    if (!offer) return;
    const response = await expireOffer({
      variables: {
        uuid: offer.uuid
      },
      errorHandlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (response.error) return;
    refetch();
  }, [offer, expireOffer, enqueueSnackbar, refetch]);

  return (
    <Window loading={!translations || !offer}>
      <OfferDetail
        actions={
          <div className={styles.actionContainer}>
            <Button
              className={styles.expirationButton}
              kind={"danger"}
              onClick={handleExpireOffer}
              disabled={loading}
            >
              {translations?.expire}
            </Button>
            <Button
              kind={"primary"}
              onClick={() => offer && history.push(RoutesBuilder.company.editOffer(offer.uuid))}
            >
              {translations?.edit}
            </Button>
          </div>
        }
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
}
