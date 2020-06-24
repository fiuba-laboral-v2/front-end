import React, { FunctionComponent } from "react";
import Button from "$components/Button";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  { setStatus }
) => <>
  <Button
    className="primary"
    onClick={() => setStatus(ApprovalStatus.approved)}
  >
    aprobame
  </Button>
  <Button
    className="danger"
    onClick={() => setStatus(ApprovalStatus.rejected)}
  >
    rechazame
  </Button>
</>;

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
}
