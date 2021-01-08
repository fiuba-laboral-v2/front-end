import React, { FunctionComponent } from "react";
import { OfferDetail as Detail } from "$components/OfferDetail";
import { Window } from "$components/Window";
import { ApplicantType, IMyOffer } from "$interfaces/Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ApplyButton } from "./ApplyButton";

export const OfferDetail: FunctionComponent<IOfferDetail> = ({
  offer,
  currentUserApplicantType
}) => (
  <Window loading={!offer}>
    <Detail
      goToCompany={offer && RoutesBuilder.applicant.companyProfile(offer.company.uuid)}
      offer={offer}
      withStatusLabel
      currentUserApplicantType={currentUserApplicantType}
      applyButton={offer && <ApplyButton offer={offer} />}
    />
  </Window>
);

interface IOfferDetail {
  offer?: IMyOffer;
  currentUserApplicantType?: ApplicantType;
}
