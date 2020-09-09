import React, { FunctionComponent } from "react";
import { useSeparatedStatusTranslations } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { TargetApplicantType } from "$interfaces/Offer";
import { StatusLabel } from "$components/StatusLabel";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const StatusLabels: FunctionComponent<IComponentProps> = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    targetApplicantType
  }
) => {
  const { graduados, extension } = useSeparatedStatusTranslations({
    targetApplicantType,
    graduadosApprovalStatus,
    extensionApprovalStatus
  });

  return (
    <div className={styles.separatedStatusLabel}>
      {
        extension &&
        <StatusLabel
          className={classNames(styles.extensionApprovalStatus, {
            [styles.statusLabel]: extension
          })}
          tooltipText={extension.tooltipText}
          text={extension.text}
          status={extension.status}
          type="no-background"
        />
      }
      {
        graduados &&
        <StatusLabel
          className={classNames({
            [styles.statusLabel]: graduados
          })}
          tooltipText={graduados.tooltipText}
          text={graduados.text}
          status={graduados.status}
          type="no-background"
        />
      }
    </div>
  );
};

interface IComponentProps {
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  targetApplicantType: TargetApplicantType;
}
