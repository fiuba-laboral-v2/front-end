import React, { FunctionComponent } from "react";
import { TAdminNotification } from "$interfaces/AdminNotification";
import { UPDATED_COMPANY_PROFILE_ADMIN_NOTIFICATION } from "$typenames";
import { UpdatedCompanyProfileAdminNotification } from "./UpdatedCompanyProfileAdminNotification";

export const AdminNotification: FunctionComponent<IComponentProps> = ({
  className,
  notification
}) => (
  <>
    {notification.__typename === UPDATED_COMPANY_PROFILE_ADMIN_NOTIFICATION && (
      <UpdatedCompanyProfileAdminNotification className={className} notification={notification} />
    )}
  </>
);

interface IComponentProps {
  className?: string;
  notification: TAdminNotification;
}
