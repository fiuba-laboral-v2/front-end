import React, { FunctionComponent } from "react";
import { TAdminNotification } from "$interfaces/AdminNotification";

export const AdminNotification: FunctionComponent<IComponentProps> = () => <>Notificaciones</>;

interface IComponentProps {
  className?: string;
  notification: TAdminNotification;
}
