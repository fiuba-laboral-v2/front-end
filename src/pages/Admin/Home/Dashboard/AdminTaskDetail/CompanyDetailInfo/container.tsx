import React, { FunctionComponent, Fragment } from "react";
import { useSnackbar } from "notistack";

import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { useCompanyByUuid } from "$hooks/queries";

import { IApprovableCompany } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import { CompanyDetailInfo } from "./component";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus();
  const { enqueueSnackbar } = useSnackbar();
  const response = useCompanyByUuid(selectedCompany.uuid);

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

  if (response.error || response.loading) return <Fragment />;

  return <CompanyDetailInfo setStatus={setStatus} company={response.data.getCompanyByUuid}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
}

export { CompanyDetailInfoContainer };
