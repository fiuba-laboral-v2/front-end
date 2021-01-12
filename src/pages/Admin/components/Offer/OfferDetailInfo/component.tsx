import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DetailInfo } from "../../DetailInfo";
import { OfferDetails } from "./OfferDetails";
import { MainTitle } from "./MainTitle";
import { IOffer } from "$interfaces/Offer";
import { IUseRejectionMessage } from "../../RejectionMessageButton/interfaces";

export const OfferDetailInfo: FunctionComponent<IOfferDetailInfoProps> = ({
  offer,
  currentStatus,
  setStatus,
  loading,
  hideActions,
  useRejectionMessage
}) => (
  <DetailInfo
    hideActions={hideActions}
    hidden={!offer}
    loading={loading}
    mainTitle={
      <MainTitle
        currentStatus={currentStatus}
        useRejectionMessage={useRejectionMessage}
        offer={offer}
      />
    }
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
  useRejectionMessage: IUseRejectionMessage;
}
