import React, { FunctionComponent } from "react";
import { EditUserAction } from "$components/EditUserAction";
import { DeactivateAccountAction } from "$components/DeactivateAccountAction";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  editUserLink,
  deactivateAccountLink,
  translations
}) => (
  <TableActions className={className}>
    <EditUserAction
      className={styles.editUserAction}
      link={editUserLink}
      tooltipMessage={translations.editAdminTooltipMessage}
    />
    <DeactivateAccountAction
      link={deactivateAccountLink}
      tooltipMessage={translations.deactivateAccountLinkTooltipMessage}
    />
  </TableActions>
);
