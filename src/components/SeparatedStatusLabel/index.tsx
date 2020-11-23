import React, { FunctionComponent } from "react";
import { useSeparatedStatusTranslations } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantType } from "$interfaces/Applicant";
import { StatusLabel } from "$components/StatusLabel";
import { LabelType } from "$components/Label";
import classNames from "classnames";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = ({
  styles,
  type,
  extensionApprovalStatus,
  graduadosApprovalStatus,
  studentsExpirationDateTime,
  graduatesExpirationDateTime,
  targetApplicantType,
  withStatusText = true,
  className
}) => {
  const { graduados, extension } = useSeparatedStatusTranslations({
    targetApplicantType,
    graduadosApprovalStatus,
    extensionApprovalStatus,
    studentsExpirationDateTime,
    graduatesExpirationDateTime,
    withStatusText
  });

  return (
    <div className={classNames(styles.separatedStatusLabel, className)}>
      {extension && (
        <StatusLabel
          className={classNames(styles.statusMargin, {
            [styles.statusLabel]: extension
          })}
          tooltipText={extension.tooltipText}
          text={extension.text}
          status={extension.status}
          type={type}
        />
      )}
      {graduados && (
        <StatusLabel
          className={classNames({
            [styles.statusLabel]: graduados
          })}
          tooltipText={graduados.tooltipText}
          text={graduados.text}
          status={graduados.status}
          type={type}
        />
      )}
    </div>
  );
};

export interface ISeparatedStatusLabelProps {
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  studentsExpirationDateTime?: string | null;
  graduatesExpirationDateTime?: string | null;
  targetApplicantType: ApplicantType;
  className?: string;
}

interface IComponentProps extends ISeparatedStatusLabelProps {
  type: LabelType;
  styles: { readonly [key: string]: string };
  className?: string;
  withStatusText?: boolean;
}
