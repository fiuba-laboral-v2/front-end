import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useOfferForApplicant, useCurrentUserApplicantType } from "$hooks";
import { OfferDetail } from "./component";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const offer = useOfferForApplicant(uuid).data?.getOfferByUuid;
  const currentUserApplicantType = useCurrentUserApplicantType();

  return <OfferDetail offer={offer} currentUserApplicantType={currentUserApplicantType} />;
};
