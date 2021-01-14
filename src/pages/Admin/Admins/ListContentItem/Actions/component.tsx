import React, { FunctionComponent } from "react";
import { EditUserAction } from "$components/EditUserAction";
import { DeactivateAccountAction } from "$components/DeactivateAccountAction";
import { ActivateAccountAction } from "$components/ActivateAccountAction";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";
import { AdminStatus } from "$interfaces/Admin";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  admin,
  editUserLink,
  deactivateAccountLink,
  activateAccountLink,
  translations
}) => (
  <TableActions className={className}>
    <EditUserAction
      className={styles.editUserAction}
      link={editUserLink}
      tooltipMessage={translations.editAdminTooltipMessage}
    />
    {admin.status === AdminStatus.active && (
      <DeactivateAccountAction
        link={deactivateAccountLink}
        tooltipMessage={translations.deactivateAccountLinkTooltipMessage}
      />
    )}
    {admin.status === AdminStatus.deactivated && (
      <ActivateAccountAction
        link={activateAccountLink}
        tooltipMessage={translations.activateAccountLinkTooltipMessage}
      />
    )}
  </TableActions>
);
