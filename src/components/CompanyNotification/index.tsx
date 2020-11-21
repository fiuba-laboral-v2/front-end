import React, { FunctionComponent } from "react";
import { TCompanyNotification } from "$interfaces/CompanyNotification";
import { COMPANY_NEW_JOB_APPLICATION_NOTIFICATION } from "$typenames";
import { CompanyNewJobApplicationNotification } from "./CompanyNewJobApplicationNotification";

export const CompanyNotification: FunctionComponent<IComponentProps> = ({
  className,
  notification
}) => {
  if (notification.__typename === COMPANY_NEW_JOB_APPLICATION_NOTIFICATION) {
    return (
      <CompanyNewJobApplicationNotification className={className} notification={notification} />
    );
  }
  throw new Error(`No component associated to type: ${notification.__typename}`);
};

interface IComponentProps {
  className?: string;
  notification: TCompanyNotification;
}
