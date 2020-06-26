import React, { FunctionComponent } from "react";
import { IApprovableCompany } from "$interfaces/Approvable";
import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
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
