import React, { FunctionComponent } from "react";
import { TCompanyNotification } from "$interfaces/CompanyNotification";
import {
  NEW_JOB_APPLICATION_COMPANY_NOTIFICATION,
  APPROVED_OFFER_COMPANY_NOTIFICATION
} from "$typenames";
import { CompanyNewJobApplicationNotification } from "./CompanyNewJobApplicationNotification";
import { CompanyApprovedOfferNotification } from "./CompanyApprovedOfferNotification";

export const CompanyNotification: FunctionComponent<IComponentProps> = ({
  className,
  notification
}) => (
  <>
    {notification.__typename === NEW_JOB_APPLICATION_COMPANY_NOTIFICATION && (
      <CompanyNewJobApplicationNotification className={className} notification={notification} />
    )}
    {notification.__typename === APPROVED_OFFER_COMPANY_NOTIFICATION && (
      <CompanyApprovedOfferNotification className={className} notification={notification} />
    )}
  </>
);

interface IComponentProps {
  className?: string;
  notification: TCompanyNotification;
}
