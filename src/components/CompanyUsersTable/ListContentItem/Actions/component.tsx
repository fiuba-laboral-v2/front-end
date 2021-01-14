import React, { FunctionComponent } from "react";
import { ChangePasswordAction } from "$components/ChangePasswordAction";
import { EditUserAction } from "$components/EditUserAction";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  hideActions,
  changePasswordLink,
  editUserLink,
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
        <EditUserAction link={editUserLink} tooltipMessage={translations.editUserTooltipMessage} />
      </>
    )}
  </TableActions>
);
