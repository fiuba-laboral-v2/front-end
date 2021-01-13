import React, { FunctionComponent } from "react";
import { useCompanyOfferByUuid, useAdminApprovalStatusAttribute } from "$hooks";
import {
  useUpdateAdminTaskStatus,
  useCurrentUser,
  useLazyRejectedOfferMessageByUuid
} from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { OfferDetailInfo } from "./component";
import { UPDATE_OFFER_APPROVAL_STATUS } from "$mutations";
import { OFFER } from "$typenames";
import { IOfferDetailInfoContainerProps } from "../../../Home/Dashboard/TaskDetail/interfaces";

export const OfferDetailInfoContainer: FunctionComponent<IOfferDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedTaskUuid,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const useRejectionMessage = useLazyRejectedOfferMessageByUuid();
  const currentUser = useCurrentUser();
  const offer = useCompanyOfferByUuid(selectedTaskUuid).data?.getOfferByUuid;
  const approvalStatusAttribute = useAdminApprovalStatusAttribute();
  const { updateAdminTaskStatus, loading: loadingUpdateStatus } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_OFFER_APPROVAL_STATUS,
    refetchAdminTasks,
    type: OFFER,
    approvalStatusAttribute
  });

  const setStatus = async (status: ApprovalStatus, moderatorMessage?: string) => {
    await updateAdminTaskStatus({
      uuid: selectedTaskUuid,
      status,
      onStatusUpdate,
      setLoadingStatusUpdate,
      moderatorMessage
    });
  };

  const hideActions = () => {
    if (!offer) return;
    return !currentUser.data?.getCurrentUser?.admin?.canModerateOffer(offer);
  };

  return (
    <OfferDetailInfo
      useRejectionMessage={useRejectionMessage}
      hideActions={hideActions()}
      loading={loadingUpdateStatus}
      setStatus={setStatus}
      offer={offer}
      currentStatus={offer?.[approvalStatusAttribute]}
    />
  );
};
