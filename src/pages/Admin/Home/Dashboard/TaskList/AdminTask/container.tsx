import React, { Fragment, FunctionComponent } from "react";
import { useAdminApprovalStatusAttribute } from "$hooks/queries";
import { TAdminTask } from "$interfaces/AdminTask";
import { CompanyIcon } from "../../Icons/CompanyIcon";
import { ApplicantIcon } from "../../Icons/ApplicantIcon";
import { OfferIcon } from "../../Icons/OfferIcon";
import { JobApplicationIcon } from "../../Icons/JobApplicationIcon";
import { AdminTask } from "./component";

import { APPLICANT, COMPANY, OFFER, JOB_APPLICATION } from "$typenames";

export const AdminTaskContainer: FunctionComponent<IAdminTaskContainerProps> = ({ adminTask }) => {
  const {
    error,
    loading,
    data: { approvalStatusAttribute }
  } = useAdminApprovalStatusAttribute();
  if (error || loading) return <Fragment />;
  let name = "";
  let Icon: FunctionComponent<{ className?: string }> = Fragment;

  if (adminTask.__typename === COMPANY) {
    name = adminTask.companyName;
    Icon = CompanyIcon;
  }

  if (adminTask.__typename === APPLICANT) {
    name = `${adminTask.user.name} ${adminTask.user.surname}`;
    Icon = ApplicantIcon;
  }

  if (adminTask.__typename === OFFER) {
    name = `${adminTask.title}`;
    Icon = OfferIcon;
  }

  if (adminTask.__typename === JOB_APPLICATION) {
    const applicantName = `${adminTask.applicant.user.name} ${adminTask.applicant.user.surname}`;
    name = `${applicantName},\n${adminTask.offer.title}`;
    Icon = JobApplicationIcon;
  }

  const approvalStatus = adminTask?.approvalStatus || adminTask[approvalStatusAttribute];

  return (
    <AdminTask
      name={name}
      Icon={Icon}
      updatedAt={adminTask.updatedAt}
      approvalStatus={approvalStatus}
    />
  );
};

interface IAdminTaskContainerProps {
  adminTask: TAdminTask;
}
