import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Links } from "$components/Links";
import styles from "./styles.module.scss";

export const RejectionReason: FunctionComponent<IComponentProps> = ({
  className,
  message,
  moderatorEmail
}) => (
  <div className={classNames(className, styles.rejectionReason)}>
    <div className={styles.messageContainer}>
      <p>
        <strong>Motivo: </strong>
        {message}
      </p>
    </div>
    <Links
      className={styles.link}
      links={[{ url: `mailto: ${moderatorEmail}`, name: "Contactar moderador/a" }]}
    />
  </div>
);

interface IComponentProps {
  className?: string;
  moderatorEmail: string;
  message: string;
}
