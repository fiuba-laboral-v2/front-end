import React, { FunctionComponent } from "react";
import { useCompanyOfferByUuid, useAdminApprovalStatusAttribute } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { IOfferAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { OfferDetailInfo } from "./component";
import { UPDATE_OFFER_APPROVAL_STATUS } from "$mutations";
import { OFFER } from "$typenames";

export const OfferDetailInfoContainer: FunctionComponent<IOfferDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedOffer,
  onStatusUpdate
}) => {
  const offer = useCompanyOfferByUuid(selectedOffer.uuid).data?.getOfferByUuid;
  const approvalStatusAttribute = useAdminApprovalStatusAttribute().data.approvalStatusAttribute;
  const { updateAdminTaskStatus, loading: loadingUpdateStatus } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_OFFER_APPROVAL_STATUS,
    refetchAdminTasks,
    type: OFFER,
    approvalStatusAttribute
  });

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedOffer.uuid,
      status: status,
      onStatusUpdate
    });
  };

  return (
    <OfferDetailInfo
      loading={loadingUpdateStatus}
      setStatus={setStatus}
      offer={offer}
      currentStatus={offer?.[approvalStatusAttribute]}
    />
  );
};

interface IOfferDetailInfoContainerProps {
  selectedOffer: IOfferAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
