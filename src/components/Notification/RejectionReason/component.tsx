import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Links } from "$components/Links";
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
    <Links
      className={styles.link}
      links={[{ url: `mailto: ${moderatorEmail}`, name: translations?.contactModerator || "" }]}
    />
  </div>
);
