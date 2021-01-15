import React, { FunctionComponent } from "react";
import { ChangePasswordAction } from "$components/ChangePasswordAction";
import { EditUserAction } from "$components/EditUserAction";
import { DeactivateAccountAction } from "$components/DeactivateAccountAction";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  hideActions,
  changePasswordLink,
  editUserLink,
  deleteUserLink,
  translations
}) => (
  <TableActions className={className}>
    {!hideActions() && (
      <>
        <ChangePasswordAction
          className={styles.changePasswordAction}
          link={changePasswordLink}
          tooltipMessage={translations.passwordTooltipMessage}
        />
        <EditUserAction
          className={styles.editUserAction}
          link={editUserLink}
          tooltipMessage={translations.editUserTooltipMessage}
        />
        <DeactivateAccountAction
          link={deleteUserLink}
          tooltipMessage={translations.deleteUserTooltipMessage}
        />
      </>
    )}
  </TableActions>
);
