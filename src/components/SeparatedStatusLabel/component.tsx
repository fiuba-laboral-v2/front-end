import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    extensionText,
    graduadosText,
    className,
    extensionApprovalStatus,
    graduadosApprovalStatus
  }
) => (
  <div className={classNames(styles.separatedStatusLabel, className)}>
    {
      extensionApprovalStatus &&
      <StatusLabel
        className={classNames({
          [styles.extensionApprovalStatus]: graduadosApprovalStatus
        })}
        tooltipText={translations.extensionTooltip}
        text={extensionText}
        status={extensionApprovalStatus}
        width="unset"
        background="light"
        withTooltip
      />
    }
    {
      graduadosApprovalStatus &&
      <StatusLabel
        tooltipText={translations.graduadosTooltip}
        text={graduadosText}
        status={graduadosApprovalStatus}
        withTooltip
        width="unset"
        background="light"
      />
    }
  </div>
);
