import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DetailInfo } from "../../DetailInfo";
import { OfferDetails } from "./OfferDetails";
import { MainTitle } from "./MainTitle";
import { IOffer } from "$interfaces/Offer";

export const OfferDetailInfo: FunctionComponent<IOfferDetailInfoProps> = (
  {
    offer,
    currentStatus,
    setStatus
  }
) => (
  <DetailInfo
    mainTitle={<MainTitle />}
    currentStatus={currentStatus}
    setStatus={setStatus}
  >
    <OfferDetails companyUuid={offer.company.uuid} />
  </DetailInfo>
);

export interface IOfferDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  offer: IOffer;
  currentStatus: ApprovalStatus;
}
