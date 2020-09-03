import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { StatusLabel } from "$components/StatusLabel";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SeparatedStatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    extensionTooltipText,
    graduadosTooltipText,
    className,
    extensionApprovalStatus,
    graduadosApprovalStatus
  }
) => (
  <div className={classNames(styles.separatedStatusLabel, className)}>
    <StatusLabel
      tooltipText={extensionTooltipText}
      text={translations.student}
      className={styles.extensionApprovalStatus}
      status={extensionApprovalStatus}
      useTooltip
      fixedPosition={false}
      expand
      allCornersRound
      transparentBackground
    />
    <StatusLabel
      tooltipText={graduadosTooltipText}
      text={translations.graduate}
      className={styles.graduadosApprovalStatus}
      status={graduadosApprovalStatus}
      useTooltip
      fixedPosition={false}
      expand
      allCornersRound
      transparentBackground
    />
  </div>
);
