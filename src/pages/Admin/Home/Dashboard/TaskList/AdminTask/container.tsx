import React, { Fragment, FunctionComponent } from "react";
import { useAdminApprovalStatusAttribute } from "$hooks/queries";
import { TAdminTask } from "$interfaces/AdminTask";

import { CompanyIcon } from "$components/Icons/CompanyIcon";
import { ApplicantIcon } from "$components/Icons/ApplicantIcon";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { AdminTask } from "./component";

import { APPLICANT, COMPANY, OFFER, JOB_APPLICATION } from "$typenames";

export const AdminTaskContainer: FunctionComponent<IAdminTaskContainerProps> = ({ adminTask }) => {
  const approvalStatusAttribute = useAdminApprovalStatusAttribute();
  if (!approvalStatusAttribute) return <Fragment />;
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
