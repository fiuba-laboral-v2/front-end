import React, { FunctionComponent } from "react";
import { EditUserAction } from "$components/EditUserAction";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  editUserLink,
  translations
}) => (
  <TableActions className={className}>
    <EditUserAction link={editUserLink} tooltipMessage={translations.editAdminTooltipMessage} />
  </TableActions>
);
