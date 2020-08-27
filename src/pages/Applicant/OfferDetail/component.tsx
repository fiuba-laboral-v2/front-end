import React, { FunctionComponent } from "react";
import { OfferDetail as Detail } from "$components/OfferDetail";
import { Button } from "$components/Button";
import { Window } from "$components/Window";
import { IOfferDetailTranslations } from "./interfaces";
import { IMyOffer } from "$interfaces/Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";
import styles from "./styles.module.scss";

export const OfferDetail: FunctionComponent<IOfferDetail> = (
  {
    offer,
    apply,
    translations
  }
) => {
  return (
    <Window>
      <Detail
        goToCompany={RoutesBuilder.applicant.companyProfile(offer.company.uuid)}
        offer={offer}
        applyButton={
          <div className={styles.applyButton}>
            <Button
              onClick={() => apply(offer.uuid)}
              className="primary"
              width="expand"
              type="submit"
              disabled={offer.hasApplied}
              title={offer.hasApplied ? translations.alreadyApplied : ""}
            >
              {translations.apply}
            </Button>
          </div>
        }
      />
    </Window>
  );
};

interface IOfferDetail {
  offer: IMyOffer;
  apply: (uuid: string) => void;
  translations: IOfferDetailTranslations;
}
