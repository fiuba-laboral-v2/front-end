import React, { FunctionComponent } from "react";
import { IApprovableCompany } from "$interfaces/Approvable";
import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { CompanyDetailInfo } from "./component";
import { useSnackbar } from "notistack";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany, onStatusUpdate }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus();
  const { enqueueSnackbar } = useSnackbar();

  const setStatus = async (status: ApprovalStatus) => {
    const result = await updateCompanyApprovalStatus({
      variables: {
        uuid: selectedCompany.uuid,
        approvalStatus: status
      }
    });

    if (result.error) return enqueueSnackbar("error!", { variant: "error" });

    enqueueSnackbar("success!", { variant: "success" });
    onStatusUpdate();
  };

  return <CompanyDetailInfo setStatus={setStatus}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
  onStatusUpdate: () => void;
}

export { CompanyDetailInfoContainer };
