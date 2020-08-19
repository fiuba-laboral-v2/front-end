import React, { Fragment, FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import { CompanyIcon } from "../../Icons/CompanyIcon";
import { ApplicantIcon } from "../../Icons/ApplicantIcon";

import { APPLICANT, COMPANY, OFFER } from "$typenames";
import { AdminTask } from "./component";
import { OfferIcon } from "../../Icons/OfferIcon";

export const AdminTaskContainer: FunctionComponent<IAdminTaskContainerProps> = ({ adminTask }) => {
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

  const approvalStatus =
    adminTask?.approvalStatus
    || adminTask?.extensionApprovalStatus
    || adminTask?.graduadosApprovalStatus;
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
