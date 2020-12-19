import React, { FunctionComponent } from "react";
import { useCompanyOfferByUuid, useAdminApprovalStatusAttribute } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { OfferDetailInfo } from "./component";
import { UPDATE_OFFER_APPROVAL_STATUS } from "$mutations";
import { OFFER } from "$typenames";
import { IOfferDetailInfoContainerProps } from "../../interfaces";

export const OfferDetailInfoContainer: FunctionComponent<IOfferDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedTask,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const offer = useCompanyOfferByUuid(selectedTask.uuid).data?.getOfferByUuid;
  const approvalStatusAttribute = useAdminApprovalStatusAttribute();
  const { updateAdminTaskStatus, loading: loadingUpdateStatus } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_OFFER_APPROVAL_STATUS,
    refetchAdminTasks,
    type: OFFER,
    approvalStatusAttribute
  });

  const setStatus = async (status: ApprovalStatus, moderatorMessage?: string) => {
    await updateAdminTaskStatus({
      uuid: selectedTask.uuid,
      status,
      onStatusUpdate,
      setLoadingStatusUpdate,
      moderatorMessage
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
