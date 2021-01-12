import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Link } from "$components/Link";
import { IUseRejectionMessage } from "../RejectionMessageButton/interfaces";
import { RejectionMessageButton } from "../RejectionMessageButton";

export const MainTitle: FunctionComponent<IMainTitleProps> = ({
  title,
  updatedAt,
  hidden,
  link,
  useRejectionMessage,
  adminTaskUuid
}) => {
  return (
    <div className={styles.header} hidden={hidden}>
      <div className={styles.main}>
        {!link && <p className={styles.title}>{title}</p>}
        {link && (
          <Link to={link} className={styles.title}>
            {title}
          </Link>
        )}
        <TimeHumanizer since={updatedAt} />
      </div>
      {useRejectionMessage && (
        <RejectionMessageButton
          className={styles.rejectionMessageButton}
          adminTaskUuid={adminTaskUuid!}
          useRejectionMessage={useRejectionMessage}
        />
      )}
    </div>
  );
};

interface IMainTitleProps {
  title: string;
  updatedAt?: string;
  hidden?: boolean;
  link?: string;
  useRejectionMessage?: IUseRejectionMessage;
  adminTaskUuid?: string;
}
