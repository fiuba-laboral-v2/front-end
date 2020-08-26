import React, { Fragment, FunctionComponent } from "react";
import { useCompanyOfferByUuid, useCurrentAdminSecretary } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { IOfferAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { OfferDetailInfo } from "./component";
import { UPDATE_OFFER_APPROVAL_STATUS } from "$mutations";
import { OFFER } from "$typenames";

export const OfferDetailInfoContainer: FunctionComponent<IOfferDetailInfoContainerProps> = (
  {
    refetchAdminTasks,
    selectedOffer,
    onStatusUpdate
  }
) => {
  const response = useCompanyOfferByUuid(selectedOffer.uuid);
  const updateAdminTaskStatus = useUpdateAdminTaskStatus({
    documentNode: UPDATE_OFFER_APPROVAL_STATUS,
    refetchAdminTasks,
    type: OFFER
  });
  const currentSecretary = useCurrentAdminSecretary();

  if (response.error || response.loading ||
    currentSecretary.error || currentSecretary.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedOffer.uuid,
      status: status,
      onStatusUpdate
    });
  };

  const offer = response.data.getOfferByUuid;

  return (
    <OfferDetailInfo
      setStatus={setStatus}
      offer={offer}
      currentStatus={offer[currentSecretary.data.approvalStatusColumn]}
    />);
};

interface IOfferDetailInfoContainerProps {
  selectedOffer: IOfferAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
