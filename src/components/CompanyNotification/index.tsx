import React, { FunctionComponent } from "react";
import { TCompanyNotification } from "$interfaces/CompanyNotification";
import {
  NEW_JOB_APPLICATION_COMPANY_NOTIFICATION,
  APPROVED_OFFER_COMPANY_NOTIFICATION,
  REJECTED_OFFER_COMPANY_NOTIFICATION
} from "$typenames";
import { NewJobApplicationCompanyNotification } from "./NewJobApplicationCompanyNotification";
import { ApprovedOfferCompanyNotification } from "./ApprovedOfferCompanyNotification";
import { RejectedOfferCompanyNotification } from "./RejectedOfferCompanyNotification";

export const CompanyNotification: FunctionComponent<IComponentProps> = ({
  className,
  notification
}) => (
  <>
    {notification.__typename === NEW_JOB_APPLICATION_COMPANY_NOTIFICATION && (
      <NewJobApplicationCompanyNotification className={className} notification={notification} />
    )}
    {notification.__typename === APPROVED_OFFER_COMPANY_NOTIFICATION && (
      <ApprovedOfferCompanyNotification className={className} notification={notification} />
    )}
    {notification.__typename === REJECTED_OFFER_COMPANY_NOTIFICATION && (
      <RejectedOfferCompanyNotification className={className} notification={notification} />
    )}
  </>
);

interface IComponentProps {
  className?: string;
  notification: TCompanyNotification;
}
