import React, { FunctionComponent } from "react";
import { ChangePasswordAction } from "$components/ChangePasswordAction";
import { EditUserAction } from "$components/EditUserAction";
import { DeactivateAccountAction } from "$components/DeactivateAccountAction";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  isCurrentUser,
  visibleActions,
  changePasswordLink,
  editUserLink,
  deleteUserLink,
  translations
}) => (
  <TableActions className={className}>
    <>
      {isCurrentUser() && (
        <ChangePasswordAction
          className={styles.changePasswordAction}
          link={changePasswordLink}
          tooltipMessage={translations.passwordTooltipMessage}
        />
      )}
      {isCurrentUser() && (
        <EditUserAction
          className={styles.editUserAction}
          link={editUserLink}
          tooltipMessage={translations.editUserTooltipMessage}
        />
      )}
      {visibleActions.includes("deleteUser") && (
        <DeactivateAccountAction
          link={deleteUserLink}
          tooltipMessage={translations.deleteUserTooltipMessage}
        />
      )}
    </>
  </TableActions>
);
