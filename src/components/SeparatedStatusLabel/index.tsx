import React, { FunctionComponent } from "react";
import { useSeparatedStatusTranslations } from "$hooks";
import { StatusLabel } from "$components/StatusLabel";
import { LabelType } from "$components/Label";
import classNames from "classnames";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType } from "$interfaces/Applicant";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = ({
  styles,
  type,
  offer,
  currentUserApplicantType,
  withStatusText = true,
  className
}) => {
  const { graduados, extension } = useSeparatedStatusTranslations({
    offer,
    currentUserApplicantType,
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
          hasExpired={extension.hasExpired}
          withStatusText={withStatusText}
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
          hasExpired={graduados.hasExpired}
          withStatusText={withStatusText}
          type={type}
        />
      )}
    </div>
  );
};

export interface ISeparatedStatusLabelProps {
  offer: IOffer;
  currentUserApplicantType?: ApplicantType;
  className?: string;
}

interface IComponentProps extends ISeparatedStatusLabelProps {
  type: LabelType;
  styles: { readonly [key: string]: string };
  className?: string;
  withStatusText?: boolean;
}
