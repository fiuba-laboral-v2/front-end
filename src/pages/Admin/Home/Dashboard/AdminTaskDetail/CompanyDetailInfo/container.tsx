import React, { FunctionComponent } from "react";
import { IApprovable, IApprovableCompany } from "$interfaces/Approvable";
import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { GET_PENDING_ENTITIES } from "$queries";
import { IUsePendingEntities } from "$hooks/queries";
import { CompanyDetailInfo } from "./component";
import { useSnackbar } from "notistack";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus();
  const { enqueueSnackbar } = useSnackbar();

  const setStatus = async (status: ApprovalStatus) => {
    const result = await updateCompanyApprovalStatus({
      variables: {
        uuid: selectedCompany.uuid,
        approvalStatus: status
      },
      update: cache => {
        const response = cache.readQuery<IUsePendingEntities>({ query: GET_PENDING_ENTITIES });
        cache.writeQuery({
          query: GET_PENDING_ENTITIES,
          data: {
            getPendingEntities: response?.getPendingEntities.filter(entity =>
              entity.uuid !== selectedCompany.uuid
            )
          }
        });
      }
    });
    if (result.error) {
      enqueueSnackbar("error!", { variant: "error" });
    } else {
      enqueueSnackbar("success!", { variant: "success" });
    }
  };

  return <CompanyDetailInfo setStatus={setStatus}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
}

export { CompanyDetailInfoContainer };
