import React, { FunctionComponent, Fragment } from "react";
import { useSnackbar } from "notistack";

import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { useCompanyByUuid } from "$hooks/queries";

import { IApprovableCompany } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import { CompanyDetailInfo } from "./component";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany, onStatusUpdate }
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

    if (result.error) return enqueueSnackbar("error!", { variant: "error" });

    enqueueSnackbar("success!", { variant: "success" });
    onStatusUpdate();
  };

  if (response.error || response.loading) return <Fragment />;

  return <CompanyDetailInfo setStatus={setStatus} company={response.data.getCompanyByUuid}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
  onStatusUpdate: () => void;
}

export { CompanyDetailInfoContainer };
