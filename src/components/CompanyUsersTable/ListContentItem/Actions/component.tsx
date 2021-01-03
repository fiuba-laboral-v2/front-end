import React, { FunctionComponent } from "react";
import { ChangePasswordAction } from "./ChangePasswordAction";
import { EditUserAction } from "./EditUserAction";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  hideChangePasswordIcon,
  changePasswordLink,
  editUserLink,
  translations
}) => (
  <div className={className}>
    {!hideChangePasswordIcon() && (
      <div className={styles.actions}>
        <ChangePasswordAction
          className={styles.changePasswordAction}
          link={changePasswordLink}
          tooltipMessage={translations.passwordTooltipMessage}
        />
        <EditUserAction link={editUserLink} tooltipMessage={translations.editUserTooltipMessage} />
      </div>
    )}
  </div>
);
