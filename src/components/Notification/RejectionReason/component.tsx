import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { EmailLink } from "$components/EmailLink";
import styles from "./styles.module.scss";
import { IComponentProps } from "./interfaces";

export const RejectionReason: FunctionComponent<IComponentProps> = ({
  className,
  message,
  moderatorEmail,
  translations
}) => (
  <div className={classNames(className, styles.rejectionReason)}>
    <div className={styles.messageContainer}>
      <p>
        <strong>{translations?.reason}: </strong>
        {message}
      </p>
    </div>
    <EmailLink
      className={styles.link}
      email={moderatorEmail}
      name={translations?.contactModerator || ""}
    />
  </div>
);
