import React, { FunctionComponent } from "react";
import { IApprovableCompany } from "$interfaces/Approvable";
import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { CompanyDetailInfo } from "./component";
import { useSnackbar } from "notistack";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus();
  const { enqueueSnackbar } = useSnackbar();

  return <CompanyDetailInfo setStatus={async status => {
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
  }
  }/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
}

export { CompanyDetailInfoContainer };
