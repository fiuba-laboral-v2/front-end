import React, { FunctionComponent } from "react";
import { OfferDetail as Detail } from "$components/OfferDetail";
import { Button } from "$components/Button";
import { Window } from "$components/Window";
import { IOfferDetailTranslations } from "./interfaces";
import { ApplicantType, IMyOffer } from "$interfaces/Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";
import styles from "./styles.module.scss";

export const OfferDetail: FunctionComponent<IOfferDetail> = ({
  offer,
  apply,
  translations,
  currentUserApplicantType
}) => (
  <Window loading={!offer || !translations}>
    <Detail
      goToCompany={offer && RoutesBuilder.applicant.companyProfile(offer.company.uuid)}
      offer={offer}
      withStatusLabel
      currentUserApplicantType={currentUserApplicantType}
      applyButton={
        <div className={styles.applyButton}>
          <Button
            onClick={() => offer && apply(offer.uuid)}
            kind="primary"
            width="expand"
            type="submit"
            disabled={offer?.hasApplied}
            title={offer?.hasApplied ? translations?.alreadyApplied : ""}
          >
            {translations?.apply}
          </Button>
        </div>
      }
    />
  </Window>
);

interface IOfferDetail {
  offer?: IMyOffer;
  apply: (uuid: string) => void;
  translations?: IOfferDetailTranslations;
  currentUserApplicantType?: ApplicantType;
}
