import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DetailInfo } from "../../DetailInfo";
import { OfferDetails } from "./OfferDetails";
import { MainTitle } from "./MainTitle";
import { IOffer } from "$interfaces/Offer";

export const OfferDetailInfo: FunctionComponent<IOfferDetailInfoProps> = ({
  offer,
  currentStatus,
  setStatus,
  loading,
  hideActions
}) => (
  <DetailInfo
    hideActions={hideActions}
    hidden={!offer}
    loading={loading}
    mainTitle={<MainTitle offer={offer} />}
    currentStatus={currentStatus}
    setStatus={setStatus}
  >
    <OfferDetails cuit={offer?.company.cuit} />
  </DetailInfo>
);

export interface IOfferDetailInfoProps {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  offer?: IOffer;
  currentStatus?: ApprovalStatus;
  loading: boolean;
  hideActions?: boolean;
}
